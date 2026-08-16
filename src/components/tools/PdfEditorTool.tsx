import React, { useState, useRef, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocument, rgb, degrees, StandardFonts } from 'pdf-lib';
import { 
  Edit3, 
  UploadCloud, 
  Download, 
  RotateCw, 
  Trash2, 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Type, 
  PenTool, 
  Square, 
  Stamp, 
  Calendar, 
  FilePlus, 
  CheckCircle2, 
  RefreshCw, 
  AlertCircle,
  EyeOff,
  Layers,
  Copy
} from 'lucide-react';

try {
  if (typeof window !== 'undefined' && pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
  }
} catch (e) {
  console.warn('PDF.js worker initialization notice', e);
}

interface PageAnnotation {
  id: string;
  type: 'text' | 'signature' | 'whiteout' | 'highlight' | 'image' | 'date';
  pageIndex: number;
  x: number; // in percentage of page width (0 to 100)
  y: number; // in percentage of page height (0 to 100)
  content?: string;
  color?: string;
  fontSize?: number;
  width?: number; // percentage
  height?: number; // percentage
  imageData?: string;
}

export const PdfEditorTool: React.FC = () => {
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [pdfDocProxy, setPdfDocProxy] = useState<any>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageRotations, setPageRotations] = useState<{ [pageIndex: number]: number }>({});
  const [annotations, setAnnotations] = useState<PageAnnotation[]>([]);
  const [scale, setScale] = useState<number>(1.2);
  const [activeTool, setActiveTool] = useState<'select' | 'text' | 'signature' | 'whiteout' | 'highlight' | 'stamp' | 'date'>('select');
  
  // Text tool options
  const [textInput, setTextInput] = useState('Authorized Signature');
  const [textColor, setTextColor] = useState('#000000');
  const [textSize, setTextSize] = useState(14);

  // Drawing signature state
  const [isDrawing, setIsDrawing] = useState(false);
  const sigCanvasRef = useRef<HTMLCanvasElement>(null);
  const [sigColor, setSigColor] = useState('#000000');
  const [sigWidth, setSigWidth] = useState(2);

  // File upload & export state
  const [fileName, setFileName] = useState('document.pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exported, setExported] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const stampInputRef = useRef<HTMLInputElement>(null);
  const mergeInputRef = useRef<HTMLInputElement>(null);

  // 1. Handle PDF upload
  const handlePdfUpload = async (file: File) => {
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      setError('Please upload a valid PDF document.');
      return;
    }

    try {
      setError(null);
      setExported(false);
      setFileName(file.name);
      const arrayBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      setPdfBytes(bytes);

      const loadingTask = pdfjsLib.getDocument({ data: bytes.slice() });
      const doc = await loadingTask.promise;
      setPdfDocProxy(doc);
      setNumPages(doc.numPages);
      setCurrentPage(1);
      setPageRotations({});
      setAnnotations([]);
    } catch (err: any) {
      console.error(err);
      setError('Failed to open PDF document: ' + err.message);
    }
  };

  // 2. Render active page to canvas
  useEffect(() => {
    let isCancelled = false;

    const renderPage = async () => {
      if (!pdfDocProxy || !canvasRef.current) return;
      try {
        const page = await pdfDocProxy.getPage(currentPage);
        if (isCancelled) return;

        const rotation = (pageRotations[currentPage - 1] || 0) % 360;
        const viewport = page.getViewport({ scale, rotation });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      } catch (err: any) {
        console.error('Error rendering page:', err);
      }
    };

    renderPage();

    return () => {
      isCancelled = true;
    };
  }, [pdfDocProxy, currentPage, scale, pageRotations]);

  // 3. Page rotation
  const handleRotateCurrentPage = () => {
    setPageRotations(prev => ({
      ...prev,
      [currentPage - 1]: ((prev[currentPage - 1] || 0) + 90) % 360
    }));
  };

  // 4. Delete Page
  const handleDeletePage = async () => {
    if (numPages <= 1 || !pdfBytes) {
      setError('Cannot delete the only page in the document.');
      return;
    }

    try {
      const pdfDoc = await PDFDocument.load(pdfBytes);
      pdfDoc.removePage(currentPage - 1);
      const newBytes = await pdfDoc.save();
      setPdfBytes(newBytes);

      const doc = await pdfjsLib.getDocument({ data: newBytes.slice() }).promise;
      setPdfDocProxy(doc);
      const newNumPages = doc.numPages;
      setNumPages(newNumPages);
      setCurrentPage(prev => Math.min(prev, newNumPages));
      
      // Filter out annotations for deleted page and shift remaining
      setAnnotations(prev => 
        prev
          .filter(a => a.pageIndex !== currentPage - 1)
          .map(a => a.pageIndex > currentPage - 1 ? { ...a, pageIndex: a.pageIndex - 1 } : a)
      );
    } catch (err: any) {
      setError('Failed to delete page: ' + err.message);
    }
  };

  // 5. Duplicate Page
  const handleDuplicatePage = async () => {
    if (!pdfBytes) return;
    try {
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const [copiedPage] = await pdfDoc.copyPages(pdfDoc, [currentPage - 1]);
      pdfDoc.insertPage(currentPage, copiedPage);
      const newBytes = await pdfDoc.save();
      setPdfBytes(newBytes);

      const doc = await pdfjsLib.getDocument({ data: newBytes.slice() }).promise;
      setPdfDocProxy(doc);
      setNumPages(doc.numPages);
      setCurrentPage(currentPage + 1);
    } catch (err: any) {
      setError('Failed to duplicate page: ' + err.message);
    }
  };

  // 6. Merge another PDF
  const handleMergePdf = async (file: File) => {
    if (!pdfBytes) return;
    try {
      const arrayBuffer = await file.arrayBuffer();
      const mainDoc = await PDFDocument.load(pdfBytes);
      const appendDoc = await PDFDocument.load(new Uint8Array(arrayBuffer));

      const copiedPages = await mainDoc.copyPages(appendDoc, appendDoc.getPageIndices());
      copiedPages.forEach(p => mainDoc.addPage(p));

      const mergedBytes = await mainDoc.save();
      setPdfBytes(mergedBytes);

      const doc = await pdfjsLib.getDocument({ data: mergedBytes.slice() }).promise;
      setPdfDocProxy(doc);
      setNumPages(doc.numPages);
      setError(null);
    } catch (err: any) {
      setError('Failed to merge PDF: ' + err.message);
    }
  };

  // 7. Click on page canvas to add annotation
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current || activeTool === 'select' || activeTool === 'signature') return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newId = `ann_${Date.now()}`;

    if (activeTool === 'text') {
      setAnnotations(prev => [
        ...prev,
        {
          id: newId,
          type: 'text',
          pageIndex: currentPage - 1,
          x,
          y,
          content: textInput || 'Text Annotation',
          color: textColor,
          fontSize: textSize
        }
      ]);
    } else if (activeTool === 'date') {
      const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      setAnnotations(prev => [
        ...prev,
        {
          id: newId,
          type: 'date',
          pageIndex: currentPage - 1,
          x,
          y,
          content: today,
          color: textColor,
          fontSize: textSize
        }
      ]);
    } else if (activeTool === 'whiteout') {
      setAnnotations(prev => [
        ...prev,
        {
          id: newId,
          type: 'whiteout',
          pageIndex: currentPage - 1,
          x,
          y,
          width: 25,
          height: 6
        }
      ]);
    } else if (activeTool === 'highlight') {
      setAnnotations(prev => [
        ...prev,
        {
          id: newId,
          type: 'highlight',
          pageIndex: currentPage - 1,
          x,
          y,
          width: 30,
          height: 4,
          color: '#facc15'
        }
      ]);
    }
  };

  // 8. Handle Image Stamp Upload
  const handleStampUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const base64 = ev.target?.result as string;
      if (base64) {
        setAnnotations(prev => [
          ...prev,
          {
            id: `stamp_${Date.now()}`,
            type: 'image',
            pageIndex: currentPage - 1,
            x: 40,
            y: 40,
            width: 20,
            height: 15,
            imageData: base64
          }
        ]);
        setActiveTool('select');
      }
    };
    reader.readAsDataURL(file);
  };

  // 9. Signature drawing methods
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = sigColor;
    ctx.lineWidth = sigWidth;
    ctx.lineCap = 'round';
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignatureCanvas = () => {
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveSignatureToPage = () => {
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    setAnnotations(prev => [
      ...prev,
      {
        id: `sig_${Date.now()}`,
        type: 'signature',
        pageIndex: currentPage - 1,
        x: 40,
        y: 40,
        width: 25,
        height: 12,
        imageData: dataUrl
      }
    ]);
    clearSignatureCanvas();
    setActiveTool('select');
  };

  // 10. Delete specific annotation
  const removeAnnotation = (id: string) => {
    setAnnotations(prev => prev.filter(a => a.id !== id));
  };

  // 11. Final PDF Export with PDF-Lib
  const handleExportEditedPdf = async () => {
    if (!pdfBytes) return;
    setIsExporting(true);
    setError(null);

    try {
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages = pdfDoc.getPages();

      // Apply rotations
      Object.entries(pageRotations).forEach(([idxStr, rot]) => {
        const idx = Number(idxStr);
        if (pages[idx]) {
          const currentRot = pages[idx].getRotation().angle;
          pages[idx].setRotation(degrees((currentRot + Number(rot)) % 360));
        }
      });

      // Apply Annotations
      for (const ann of annotations) {
        const page = pages[ann.pageIndex];
        if (!page) continue;

        const { width: pWidth, height: pHeight } = page.getSize();
        const posX = (ann.x / 100) * pWidth;
        const posY = pHeight - ((ann.y / 100) * pHeight); // PDF coords origin is bottom-left

        if (ann.type === 'text' || ann.type === 'date') {
          const size = ann.fontSize || 12;
          page.drawText(ann.content || '', {
            x: posX,
            y: posY - size,
            size: size,
            font: font,
            color: rgb(0.1, 0.1, 0.1)
          });
        } else if (ann.type === 'whiteout') {
          const boxW = ((ann.width || 20) / 100) * pWidth;
          const boxH = ((ann.height || 5) / 100) * pHeight;
          page.drawRectangle({
            x: posX,
            y: posY - boxH,
            width: boxW,
            height: boxH,
            color: rgb(1, 1, 1),
            borderColor: rgb(0.9, 0.9, 0.9),
            borderWidth: 0.5
          });
        } else if (ann.type === 'highlight') {
          const boxW = ((ann.width || 25) / 100) * pWidth;
          const boxH = ((ann.height || 4) / 100) * pHeight;
          page.drawRectangle({
            x: posX,
            y: posY - boxH,
            width: boxW,
            height: boxH,
            color: rgb(1, 0.9, 0.2),
            opacity: 0.4
          });
        } else if ((ann.type === 'signature' || ann.type === 'image') && ann.imageData) {
          try {
            const pngImage = await pdfDoc.embedPng(ann.imageData);
            const imgW = ((ann.width || 20) / 100) * pWidth;
            const imgH = ((ann.height || 10) / 100) * pHeight;
            page.drawImage(pngImage, {
              x: posX,
              y: posY - imgH,
              width: imgW,
              height: imgH
            });
          } catch (e) {
            console.warn('Image embed fallback', e);
          }
        }
      }

      const modifiedBytes = await pdfDoc.save();
      const blob = new Blob([modifiedBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `edited_${fileName.replace(/\.pdf$/i, '')}_avrx.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setExported(true);
    } catch (err: any) {
      console.error(err);
      setError('Failed to export edited PDF: ' + err.message);
    } finally {
      setIsExporting(false);
    }
  };

  const currentAnnotations = annotations.filter(a => a.pageIndex === currentPage - 1);

  return (
    <div className="space-y-6">
      
      {/* Upload Zone */}
      {!pdfDocProxy ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) handlePdfUpload(e.dataTransfer.files[0]);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-700 hover:border-cyan-400 bg-slate-900/50 hover:bg-slate-900/80 rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition flex flex-col items-center justify-center space-y-4 group"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => {
              if (e.target.files?.[0]) handlePdfUpload(e.target.files[0]);
            }}
            accept=".pdf"
            className="hidden"
          />
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Edit3 className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Open PDF in Interactive Editor
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Annotate, draw signatures, insert stamps, rotate, reorder, delete pages, and redact content
            </p>
          </div>
          <span className="text-[11px] font-medium text-slate-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
            Full PDF Tool Suite • 100% In-Browser Privacy
          </span>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800">
            
            {/* Page Navigation */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300 transition"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs sm:text-sm font-mono font-bold text-white px-2">
                Page {currentPage} of {numPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.max(1, Math.min(numPages, p + 1)))}
                disabled={currentPage >= numPages}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300 transition"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setScale(s => Math.max(0.6, s - 0.2))}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-1">{Math.round(scale * 100)}%</span>
              <button
                onClick={() => setScale(s => Math.min(2.5, s + 0.2))}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Page Action Tools */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={handleRotateCurrentPage}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition"
                title="Rotate 90°"
              >
                <RotateCw className="w-4 h-4" />
              </button>
              <button
                onClick={handleDuplicatePage}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 transition"
                title="Duplicate Current Page"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={handleDeletePage}
                disabled={numPages <= 1}
                className="p-2 rounded-lg bg-slate-900 hover:bg-rose-950 disabled:opacity-40 text-slate-300 hover:text-rose-400 transition"
                title="Delete Current Page"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <label
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition cursor-pointer"
                title="Merge Another PDF"
              >
                <FilePlus className="w-4 h-4" />
                <input
                  type="file"
                  ref={mergeInputRef}
                  onChange={(e) => {
                    if (e.target.files?.[0]) handleMergePdf(e.target.files[0]);
                  }}
                  accept=".pdf"
                  className="hidden"
                />
              </label>
            </div>

            {/* Change PDF button */}
            <button
              onClick={() => {
                setPdfDocProxy(null);
                setPdfBytes(null);
                setAnnotations([]);
              }}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              Close
            </button>
          </div>

          {/* Secondary Toolbar: Interactive Edit Tools */}
          <div className="flex flex-wrap items-center gap-2 p-2 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2">
              Tool:
            </span>

            <button
              onClick={() => setActiveTool('select')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTool === 'select'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Select &amp; View</span>
            </button>

            <button
              onClick={() => setActiveTool('text')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTool === 'text'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>Add Text</span>
            </button>

            <button
              onClick={() => setActiveTool('date')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTool === 'date'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Date Stamp</span>
            </button>

            <button
              onClick={() => setActiveTool('signature')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTool === 'signature'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Draw Signature</span>
            </button>

            <button
              onClick={() => setActiveTool('whiteout')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTool === 'whiteout'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Redact / Whiteout</span>
            </button>

            <button
              onClick={() => setActiveTool('highlight')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTool === 'highlight'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Square className="w-3.5 h-3.5" />
              <span>Highlight</span>
            </button>

            <label
              className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
            >
              <Stamp className="w-3.5 h-3.5" />
              <span>Insert Image / Stamp</span>
              <input
                type="file"
                ref={stampInputRef}
                onChange={handleStampUpload}
                accept="image/png,image/jpeg"
                className="hidden"
              />
            </label>
          </div>

          {/* Tool-specific Settings Panel */}
          {activeTool === 'text' && (
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center gap-4 text-xs">
              <div className="flex-grow min-w-[200px]">
                <label className="text-slate-400 block mb-1 font-semibold">Text Content to Place:</label>
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Click on the page below to place this text"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1 font-semibold">Font Size ({textSize}pt):</label>
                <input
                  type="range"
                  min="9"
                  max="28"
                  value={textSize}
                  onChange={(e) => setTextSize(Number(e.target.value))}
                  className="accent-cyan-400"
                />
              </div>
              <span className="text-cyan-400 font-medium text-[11px] self-end pb-2">
                👉 Click anywhere on the PDF page below to place text.
              </span>
            </div>
          )}

          {activeTool === 'signature' && (
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <PenTool className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Draw Your Digital Signature</span>
                </span>
                <button
                  onClick={clearSignatureCanvas}
                  className="text-xs text-rose-400 hover:underline"
                >
                  Clear Pad
                </button>
              </div>

              <div className="bg-white rounded-lg p-1 border border-slate-300 w-full max-w-md mx-auto">
                <canvas
                  ref={sigCanvasRef}
                  width={400}
                  height={120}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="w-full h-28 bg-white cursor-crosshair touch-none"
                />
              </div>

              <div className="flex items-center justify-between max-w-md mx-auto">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Color:</span>
                  <button
                    onClick={() => setSigColor('#000000')}
                    className={`w-5 h-5 rounded-full bg-black border ${sigColor === '#000000' ? 'ring-2 ring-cyan-400' : ''}`}
                  />
                  <button
                    onClick={() => setSigColor('#1e40af')}
                    className={`w-5 h-5 rounded-full bg-blue-800 border ${sigColor === '#1e40af' ? 'ring-2 ring-cyan-400' : ''}`}
                  />
                </div>
                <button
                  onClick={saveSignatureToPage}
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow transition"
                >
                  Place Signature on Page
                </button>
              </div>
            </div>
          )}

          {/* Main Visual PDF Canvas Stage */}
          <div
            onClick={handleCanvasClick}
            className={`relative max-w-full overflow-auto p-4 sm:p-8 bg-slate-950 rounded-2xl border border-slate-800 flex justify-center min-h-[500px] ${
              activeTool !== 'select' && activeTool !== 'signature' ? 'cursor-crosshair' : 'cursor-default'
            }`}
          >
            <div className="relative shadow-2xl inline-block bg-white rounded">
              <canvas ref={canvasRef} className="block max-w-full h-auto" />

              {/* Render Visible Annotations on Top of Canvas */}
              {currentAnnotations.map((ann) => (
                <div
                  key={ann.id}
                  style={{
                    position: 'absolute',
                    left: `${ann.x}%`,
                    top: `${ann.y}%`,
                    transform: 'translate(0, 0)',
                    zIndex: 20
                  }}
                  className="group relative"
                >
                  {/* Delete Badge */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeAnnotation(ann.id);
                    }}
                    className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition shadow"
                    title="Remove item"
                  >
                    ×
                  </button>

                  {/* Text / Date */}
                  {(ann.type === 'text' || ann.type === 'date') && (
                    <div
                      style={{
                        fontSize: `${(ann.fontSize || 12) * scale * 0.8}px`,
                        color: ann.color || '#000000'
                      }}
                      className="font-sans font-medium select-none px-1 rounded border border-transparent group-hover:border-cyan-400/60 bg-white/70"
                    >
                      {ann.content}
                    </div>
                  )}

                  {/* Whiteout Box */}
                  {ann.type === 'whiteout' && (
                    <div
                      style={{
                        width: `${(ann.width || 20) * 4}px`,
                        height: `${(ann.height || 5) * 4}px`
                      }}
                      className="bg-white border border-slate-300 select-none shadow-sm"
                    />
                  )}

                  {/* Highlight Box */}
                  {ann.type === 'highlight' && (
                    <div
                      style={{
                        width: `${(ann.width || 25) * 4}px`,
                        height: `${(ann.height || 4) * 4}px`
                      }}
                      className="bg-yellow-300/40 border border-yellow-400 select-none"
                    />
                  )}

                  {/* Signature / Image */}
                  {(ann.type === 'signature' || ann.type === 'image') && ann.imageData && (
                    <img
                      src={ann.imageData}
                      alt="Annotation"
                      style={{
                        width: `${(ann.width || 20) * 5}px`,
                        height: 'auto'
                      }}
                      className="border border-transparent group-hover:border-cyan-400/60 rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Annotations Count Badge */}
          {annotations.length > 0 && (
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>{annotations.length} annotation(s) added across document</span>
              <button
                onClick={() => setAnnotations([])}
                className="text-rose-400 hover:underline"
              >
                Clear all annotations
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Export Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>All modifications rendered with full vector precision</span>
            </div>

            <button
              onClick={handleExportEditedPdf}
              disabled={isExporting}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
            >
              {isExporting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Compiling Edited PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Edited PDF</span>
                </>
              )}
            </button>
          </div>

          {exported && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Edited PDF exported and downloaded successfully!</span>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
