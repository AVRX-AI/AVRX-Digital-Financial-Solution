import React, { useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import JSZip from 'jszip';
import { 
  Image, 
  UploadCloud, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  CheckSquare, 
  Square, 
  Archive,
  Eye
} from 'lucide-react';

try {
  if (typeof window !== 'undefined' && pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
  }
} catch (e) {
  console.warn('PDF.js worker initialization notice', e);
}

interface RenderedPage {
  pageNumber: number;
  dataUrl: string;
  blob: Blob;
  width: number;
  height: number;
  sizeKb: number;
}

export const PdfToJpgTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [renderedPages, setRenderedPages] = useState<RenderedPage[]>([]);
  const [selectedPages, setSelectedPages] = useState<number[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [quality, setQuality] = useState(0.92);
  const [dpiScale, setDpiScale] = useState(1.5);
  const [error, setError] = useState<string | null>(null);
  const [isZipping, setIsZipping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (uploadedFile: File) => {
    if (!uploadedFile.name.toLowerCase().endsWith('.pdf')) {
      setError('Please upload a valid .pdf document.');
      return;
    }

    setError(null);
    setRenderedPages([]);
    setSelectedPages([]);
    setFile(uploadedFile);
    setIsProcessing(true);
    setProgress(5);

    try {
      const arrayBuffer = await uploadedFile.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdfDoc = await loadingTask.promise;
      const numPages = pdfDoc.numPages;

      const pagesResult: RenderedPage[] = [];
      const selected: number[] = [];

      for (let i = 1; i <= numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const viewport = page.getViewport({ scale: dpiScale });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');

        if (!ctx) continue;

        // Fill white background for JPEG
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        await (page as any).render({
          canvasContext: ctx,
          viewport: viewport,
          canvas: canvas
        }).promise;

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((b) => resolve(b || new Blob()), 'image/jpeg', quality);
        });

        pagesResult.push({
          pageNumber: i,
          dataUrl,
          blob,
          width: Math.round(viewport.width),
          height: Math.round(viewport.height),
          sizeKb: Math.round(blob.size / 1024)
        });

        selected.push(i);
        setProgress(Math.round((i / numPages) * 95));
      }

      setRenderedPages(pagesResult);
      setSelectedPages(selected);
      setProgress(100);
    } catch (err: any) {
      console.error(err);
      setError('Failed to convert PDF pages: ' + (err.message || 'Error processing document.'));
    } finally {
      setIsProcessing(false);
    }
  };

  const togglePageSelection = (pageNumber: number) => {
    setSelectedPages(prev =>
      prev.includes(pageNumber) ? prev.filter(p => p !== pageNumber) : [...prev, pageNumber]
    );
  };

  const selectAllPages = () => {
    setSelectedPages(renderedPages.map(p => p.pageNumber));
  };

  const deselectAllPages = () => {
    setSelectedPages([]);
  };

  const downloadSinglePage = (page: RenderedPage) => {
    const baseName = file ? file.name.replace(/\.pdf$/i, '') : 'page';
    const link = document.createElement('a');
    link.href = page.dataUrl;
    link.download = `${baseName}_page_${page.pageNumber}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllAsZip = async () => {
    if (selectedPages.length === 0) return;
    setIsZipping(true);

    try {
      const zip = new JSZip();
      const baseName = file ? file.name.replace(/\.pdf$/i, '') : 'pdf_images';

      const pagesToInclude = renderedPages.filter(p => selectedPages.includes(p.pageNumber));
      
      pagesToInclude.forEach((page) => {
        zip.file(`${baseName}_page_${page.pageNumber}.jpg`, page.blob);
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${baseName}_jpg_images_avrx.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err: any) {
      setError('Failed to generate ZIP: ' + err.message);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Upload Zone */}
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
            <Image className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Upload PDF to Convert to High-Res JPG
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Render each page into crisp JPG images with individual and ZIP download
            </p>
          </div>
          <span className="text-[11px] font-medium text-slate-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
            High DPI Quality • Zero Cloud Storage
          </span>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* File Selected Header */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Image className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">{file.name}</h4>
                <p className="text-xs text-slate-400">
                  {(file.size / 1024).toFixed(1)} KB • {renderedPages.length} Pages converted
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setFile(null);
                setRenderedPages([]);
                setSelectedPages([]);
                setError(null);
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
            >
              Choose Another PDF
            </button>
          </div>

          {/* Processing Progress */}
          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Rendering pages into high-definition images...</span>
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

          {/* Error */}
          {error && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Page Selection Controls */}
          {renderedPages.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-300">
                  {selectedPages.length} of {renderedPages.length} pages selected
                </span>
                <button
                  onClick={selectAllPages}
                  className="text-cyan-400 hover:underline font-medium"
                >
                  Select All
                </button>
                <span className="text-slate-600">•</span>
                <button
                  onClick={deselectAllPages}
                  className="text-slate-400 hover:underline font-medium"
                >
                  Deselect All
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-slate-400">Quality: {Math.round(quality * 100)}%</span>
              </div>
            </div>
          )}

          {/* Rendered Page Previews Grid */}
          {renderedPages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto p-2">
              {renderedPages.map((page) => {
                const isSelected = selectedPages.includes(page.pageNumber);
                return (
                  <div
                    key={page.pageNumber}
                    onClick={() => togglePageSelection(page.pageNumber)}
                    className={`rounded-2xl border p-3 cursor-pointer transition relative group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-500/70 shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    {/* Header with Checkbox */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-500" />
                        )}
                        <span>Page {page.pageNumber}</span>
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">{page.sizeKb} KB</span>
                    </div>

                    {/* Image Thumbnail */}
                    <div className="bg-white rounded-lg overflow-hidden my-1 flex items-center justify-center p-1 border border-slate-700 aspect-[3/4]">
                      <img
                        src={page.dataUrl}
                        alt={`Page ${page.pageNumber}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Individual Download Trigger */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadSinglePage(page);
                      }}
                      className="mt-2 w-full py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 text-xs font-semibold transition flex items-center justify-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download JPG</span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Batch Actions */}
          {renderedPages.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Ready to download high resolution 300 DPI images</span>
              </div>

              <button
                onClick={downloadAllAsZip}
                disabled={isZipping || selectedPages.length === 0}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
              >
                {isZipping ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Creating ZIP Archive...</span>
                  </>
                ) : (
                  <>
                    <Archive className="w-4 h-4" />
                    <span>Download {selectedPages.length} Pages as ZIP</span>
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
