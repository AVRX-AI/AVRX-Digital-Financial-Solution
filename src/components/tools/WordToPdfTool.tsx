import React, { useState, useRef } from 'react';
import mammoth from 'mammoth';
import { jsPDF } from 'jspdf';
import { 
  FileText, 
  UploadCloud, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck,
  Eye
} from 'lucide-react';

export const WordToPdfTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const [fontSize, setFontSize] = useState<number>(11);
  const [pageMargin, setPageMargin] = useState<number>(15);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (uploadedFile: File) => {
    setError(null);
    setPdfGenerated(false);
    setExtractedText('');
    setFile(uploadedFile);
    setIsProcessing(true);

    try {
      const fileName = uploadedFile.name.toLowerCase();
      
      if (fileName.endsWith('.docx')) {
        const arrayBuffer = await uploadedFile.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        if (!result.value || result.value.trim().length === 0) {
          throw new Error('No readable text found in this DOCX file.');
        }
        setExtractedText(result.value);
      } else if (fileName.endsWith('.txt') || fileName.endsWith('.md')) {
        const text = await uploadedFile.text();
        setExtractedText(text);
      } else if (fileName.endsWith('.doc')) {
        // Fallback for binary .doc files: read text segments
        const arrayBuffer = await uploadedFile.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        let textContent = '';
        for (let i = 0; i < bytes.length; i++) {
          const byte = bytes[i];
          if (byte >= 32 && byte <= 126) {
            textContent += String.fromCharCode(byte);
          } else if (byte === 10 || byte === 13) {
            textContent += '\n';
          }
        }
        const cleaned = textContent.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/g, ' ').replace(/\s{3,}/g, '\n\n').trim();
        if (cleaned.length < 20) {
          throw new Error('Legacy .doc binary contains complex formatting. Please save as .docx or text for optimal fidelity.');
        }
        setExtractedText(cleaned);
      } else {
        throw new Error('Please upload a .docx, .doc, .txt, or .md document.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to parse document.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGeneratePdf = () => {
    if (!extractedText.trim()) return;
    setIsConverting(true);

    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = pageMargin;
      const maxLineWidth = pageWidth - (margin * 2);
      const lineHeight = fontSize * 0.45;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(fontSize);
      doc.setTextColor(30, 30, 30);

      // Split text into paragraphs and wrapped lines
      const paragraphs = extractedText.split(/\r?\n/);
      let cursorY = margin + 5;
      let currentPage = 1;

      paragraphs.forEach((para) => {
        if (!para.trim()) {
          cursorY += lineHeight;
          return;
        }

        const lines = doc.splitTextToSize(para, maxLineWidth);
        
        lines.forEach((line: string) => {
          if (cursorY + lineHeight > pageHeight - margin) {
            // Add page footer
            doc.setFontSize(9);
            doc.setTextColor(130, 130, 130);
            doc.text(`Page ${currentPage}`, pageWidth / 2, pageHeight - 8, { align: 'center' });
            
            doc.addPage();
            currentPage++;
            cursorY = margin + 5;
            doc.setFontSize(fontSize);
            doc.setTextColor(30, 30, 30);
          }

          doc.text(line, margin, cursorY);
          cursorY += lineHeight;
        });

        cursorY += lineHeight * 0.4; // Paragraph gap
      });

      // Final page footer
      doc.setFontSize(9);
      doc.setTextColor(130, 130, 130);
      doc.text(`Page ${currentPage}`, pageWidth / 2, pageHeight - 8, { align: 'center' });

      const baseName = file ? file.name.replace(/\.[^/.]+$/, '') : 'converted_document';
      doc.save(`${baseName}_avrx.pdf`);
      setPdfGenerated(true);
    } catch (err: any) {
      console.error(err);
      setError('Failed to generate PDF: ' + err.message);
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Upload Box */}
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
            accept=".docx,.doc,.txt,.md"
            className="hidden"
          />
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <UploadCloud className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Choose a Word Document (.docx, .doc, .txt)
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Drag and drop your file here or click to browse from your device
            </p>
          </div>
          <span className="text-[11px] font-medium text-slate-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
            100% Client-Side Processing • Never Leaves Your Device
          </span>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* File Selected Card */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">{file.name}</h4>
                <p className="text-xs text-slate-400">
                  {(file.size / 1024).toFixed(1)} KB • {extractedText ? `${extractedText.split(/\s+/).filter(Boolean).length} words extracted` : 'Parsing...'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setFile(null);
                  setExtractedText('');
                  setPdfGenerated(false);
                  setError(null);
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
              >
                Change File
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Options & Configuration */}
          {extractedText && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Font Size (pt)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="8"
                    max="18"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="flex-grow accent-cyan-400"
                  />
                  <span className="text-xs font-mono font-bold text-cyan-400 w-8">{fontSize}pt</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Page Margin (mm)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="10"
                    max="30"
                    value={pageMargin}
                    onChange={(e) => setPageMargin(Number(e.target.value))}
                    className="flex-grow accent-cyan-400"
                  />
                  <span className="text-xs font-mono font-bold text-cyan-400 w-8">{pageMargin}mm</span>
                </div>
              </div>
            </div>
          )}

          {/* Extracted Content Preview Box */}
          {extractedText && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-slate-300">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Document Text Preview</span>
                </span>
                <span>{extractedText.length} characters</span>
              </div>
              <div className="max-h-60 overflow-y-auto p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 font-sans whitespace-pre-wrap leading-relaxed">
                {extractedText}
              </div>
            </div>
          )}

          {/* Action Trigger Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Standard A4 PDF with Page Numbering</span>
            </div>

            <button
              onClick={handleGeneratePdf}
              disabled={isConverting || !extractedText}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
            >
              {isConverting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Converted PDF</span>
                </>
              )}
            </button>
          </div>

          {pdfGenerated && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
              <FileCheck className="w-5 h-5 shrink-0" />
              <span>PDF downloaded successfully! Check your browser downloads folder.</span>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
