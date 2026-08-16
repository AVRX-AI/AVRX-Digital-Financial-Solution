import React, { useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { 
  FileType, 
  UploadCloud, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck,
  Eye
} from 'lucide-react';

// Configure pdfjs worker if available
try {
  if (typeof window !== 'undefined' && pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
  }
} catch (e) {
  console.warn('PDF.js worker initialization notice', e);
}

export const PdfToWordTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [extractedPages, setExtractedPages] = useState<{ pageNumber: number; text: string }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [docExported, setDocExported] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (uploadedFile: File) => {
    if (!uploadedFile.name.toLowerCase().endsWith('.pdf')) {
      setError('Please upload a valid .pdf document.');
      return;
    }

    setError(null);
    setDocExported(false);
    setExtractedPages([]);
    setFile(uploadedFile);
    setIsProcessing(true);
    setProgress(5);

    try {
      const arrayBuffer = await uploadedFile.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdfDoc = await loadingTask.promise;
      const numPages = pdfDoc.numPages;

      const pagesData: { pageNumber: number; text: string }[] = [];

      for (let i = 1; i <= numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        
        let pageText = '';
        let lastY: number | null = null;

        textContent.items.forEach((item: any) => {
          if ('str' in item) {
            const currentY = item.transform ? item.transform[5] : null;
            if (lastY !== null && currentY !== null && Math.abs(currentY - lastY) > 5) {
              pageText += '\n' + item.str;
            } else {
              pageText += (pageText.endsWith(' ') || item.str.startsWith(' ') ? '' : ' ') + item.str;
            }
            lastY = currentY;
          }
        });

        pagesData.push({
          pageNumber: i,
          text: pageText.trim()
        });

        setProgress(Math.round((i / numPages) * 90));
      }

      setExtractedPages(pagesData);
      setProgress(100);
    } catch (err: any) {
      console.error(err);
      setError('Failed to extract text from PDF: ' + (err.message || 'Scanned or encrypted PDF.'));
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExportDocx = async () => {
    if (extractedPages.length === 0) return;
    setIsExporting(true);

    try {
      const docChildren: Paragraph[] = [
        new Paragraph({
          text: file ? file.name.replace(/\.pdf$/i, '') : 'Extracted Document',
          heading: HeadingLevel.HEADING_1,
          spacing: { after: 300 }
        })
      ];

      extractedPages.forEach((page) => {
        if (extractedPages.length > 1) {
          docChildren.push(
            new Paragraph({
              text: `--- Page ${page.pageNumber} ---`,
              spacing: { before: 200, after: 100 },
              children: [
                new TextRun({
                  text: `[Page ${page.pageNumber}]`,
                  italics: true,
                  color: '888888',
                  size: 20
                })
              ]
            })
          );
        }

        const paragraphs = page.text.split(/\n+/);
        paragraphs.forEach((pText) => {
          if (pText.trim()) {
            docChildren.push(
              new Paragraph({
                spacing: { after: 140 },
                children: [
                  new TextRun({
                    text: pText.trim(),
                    size: 24 // 12pt in half-points
                  })
                ]
              })
            );
          }
        });
      });

      const doc = new Document({
        sections: [
          {
            properties: {},
            children: docChildren
          }
        ]
      });

      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const baseName = file ? file.name.replace(/\.[^/.]+$/, '') : 'converted_document';
      link.download = `${baseName}_avrx.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDocExported(true);
    } catch (err: any) {
      console.error(err);
      setError('Failed to generate DOCX file: ' + err.message);
    } finally {
      setIsExporting(false);
    }
  };

  const totalWords = extractedPages.reduce((acc, p) => acc + p.text.split(/\s+/).filter(Boolean).length, 0);

  return (
    <div className="space-y-6">
      
      {/* Upload Drop Zone */}
      {!file ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) handleFileUpload(e.dataTransfer.files[0]);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-700 hover:border-cyan-400 bg-slate-900/50 hover:bg-slate-900/80 rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition flex flex-col items-center justify-center space-y-4 group"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => {
              if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
            }}
            accept=".pdf"
            className="hidden"
          />
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <UploadCloud className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Upload PDF Document (.pdf)
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Extract text and reconstruct as editable Microsoft Word (.docx) file
            </p>
          </div>
          <span className="text-[11px] font-medium text-slate-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
            Native .docx Output • 100% Client-Side Private
          </span>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* File Selected Card */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                <FileType className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">{file.name}</h4>
                <p className="text-xs text-slate-400">
                  {(file.size / 1024).toFixed(1)} KB • {extractedPages.length} Pages • {totalWords} words extracted
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setFile(null);
                setExtractedPages([]);
                setDocExported(false);
                setError(null);
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
            >
              Choose Another PDF
            </button>
          </div>

          {/* Progress Bar */}
          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Extracting text layers from PDF...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Extracted Text Preview */}
          {extractedPages.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-slate-300">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Document Preview (Page by Page)</span>
                </span>
                <span>{extractedPages.length} pages ready</span>
              </div>

              <div className="max-h-72 overflow-y-auto space-y-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                {extractedPages.map((p) => (
                  <div key={p.pageNumber} className="space-y-1 pb-3 border-b border-slate-900 last:border-none">
                    <span className="text-[11px] font-bold text-cyan-400 font-mono">
                      Page {p.pageNumber}:
                    </span>
                    <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {p.text || '[Empty or image-based page content]'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Trigger */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Compatible with MS Word, Google Docs &amp; LibreOffice</span>
            </div>

            <button
              onClick={handleExportDocx}
              disabled={isExporting || extractedPages.length === 0}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
            >
              {isExporting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Creating .docx Document...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Word (.docx) File</span>
                </>
              )}
            </button>
          </div>

          {docExported && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
              <FileCheck className="w-5 h-5 shrink-0" />
              <span>Word document created &amp; downloaded successfully!</span>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
