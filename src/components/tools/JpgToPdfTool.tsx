import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import { 
  Images, 
  UploadCloud, 
  Download, 
  ArrowUp, 
  ArrowDown, 
  Trash2, 
  Plus, 
  CheckCircle2, 
  RefreshCw, 
  AlertCircle,
  FileCheck
} from 'lucide-react';

interface UploadedImageItem {
  id: string;
  file: File;
  previewUrl: string;
  width: number;
  height: number;
  sizeKb: number;
}

export const JpgToPdfTool: React.FC = () => {
  const [images, setImages] = useState<UploadedImageItem[]>([]);
  const [pageSize, setPageSize] = useState<'a4' | 'letter' | 'fit'>('a4');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape' | 'auto'>('auto');
  const [margin, setMargin] = useState<number>(10);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageFiles = async (fileList: FileList | File[]) => {
    setError(null);
    setPdfGenerated(false);
    const newItems: UploadedImageItem[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (!file.type.startsWith('image/')) continue;

      const previewUrl = URL.createObjectURL(file);
      const img = new window.Image();
      img.src = previewUrl;

      await new Promise((resolve) => {
        img.onload = () => {
          newItems.push({
            id: `img_${Date.now()}_${Math.random()}`,
            file,
            previewUrl,
            width: img.naturalWidth || 800,
            height: img.naturalHeight || 600,
            sizeKb: Math.round(file.size / 1024)
          });
          resolve(true);
        };
        img.onerror = () => resolve(false);
      });
    }

    if (newItems.length === 0) {
      setError('Please upload valid image files (JPG, PNG, WebP).');
      return;
    }

    setImages(prev => [...prev, ...newItems]);
  };

  const moveImage = (index: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= images.length) return;

    const copy = [...images];
    const item = copy.splice(index, 1)[0];
    copy.splice(targetIdx, 0, item);
    setImages(copy);
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const handleGeneratePdf = async () => {
    if (images.length === 0) return;
    setIsGenerating(true);
    setError(null);

    try {
      let doc: jsPDF | null = null;

      for (let i = 0; i < images.length; i++) {
        const item = images[i];
        
        let imgOrientation: 'portrait' | 'landscape' = 'portrait';
        if (orientation === 'auto') {
          imgOrientation = item.width > item.height ? 'landscape' : 'portrait';
        } else {
          imgOrientation = orientation;
        }

        let pWidth = 210; // A4 default mm
        let pHeight = 297;

        if (pageSize === 'letter') {
          pWidth = 215.9;
          pHeight = 279.4;
        } else if (pageSize === 'fit') {
          // 72 pt/inch = ~0.264583 mm/px
          pWidth = (item.width * 0.264583) + (margin * 2);
          pHeight = (item.height * 0.264583) + (margin * 2);
        }

        if (imgOrientation === 'landscape' && pageSize !== 'fit') {
          const temp = pWidth;
          pWidth = pHeight;
          pHeight = temp;
        }

        if (i === 0) {
          doc = new jsPDF({
            orientation: imgOrientation,
            unit: 'mm',
            format: pageSize === 'fit' ? [pWidth, pHeight] : pageSize
          });
        } else if (doc) {
          doc.addPage(pageSize === 'fit' ? [pWidth, pHeight] : pageSize, imgOrientation);
        }

        if (!doc) continue;

        const maxW = pWidth - (margin * 2);
        const maxH = pHeight - (margin * 2);

        // Calculate aspect ratio fit inside bounding box
        const ratio = Math.min(maxW / item.width, maxH / item.height);
        const drawW = item.width * ratio;
        const drawH = item.height * ratio;

        const posX = margin + ((maxW - drawW) / 2);
        const posY = margin + ((maxH - drawH) / 2);

        // Load image as canvas base64 to ensure format compatibility
        const canvas = document.createElement('canvas');
        canvas.width = item.width;
        canvas.height = item.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const imgEl = new window.Image();
          imgEl.src = item.previewUrl;
          await new Promise((res) => {
            imgEl.onload = () => {
              ctx.drawImage(imgEl, 0, 0);
              res(true);
            };
          });
          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          doc.addImage(imgData, 'JPEG', posX, posY, drawW, drawH);
        }
      }

      if (doc) {
        doc.save(`images_combined_avrx.pdf`);
        setPdfGenerated(true);
      }
    } catch (err: any) {
      console.error(err);
      setError('Failed to generate PDF: ' + err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Upload Zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files) handleImageFiles(e.dataTransfer.files);
        }}
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-slate-700 hover:border-cyan-400 bg-slate-900/50 hover:bg-slate-900/80 rounded-2xl p-6 sm:p-10 text-center cursor-pointer transition flex flex-col items-center justify-center space-y-3 group"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => {
            if (e.target.files) handleImageFiles(e.target.files);
          }}
          accept="image/png,image/jpeg,image/webp,image/jpg"
          multiple
          className="hidden"
        />
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Images className="w-7 h-7 text-cyan-400" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-white">
            Upload Images (JPG, PNG, WebP)
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Select one or multiple photos to convert into a single PDF
          </p>
        </div>
        <span className="text-[11px] font-medium text-slate-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
          Reorder Sequence • Custom Page Size &amp; Margins
        </span>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {images.length > 0 && (
        <div className="space-y-6">
          
          {/* Options Toolbar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs">
            
            {/* Page Size */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300">Page Dimensions</label>
              <select
                value={pageSize}
                onChange={(e: any) => setPageSize(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="a4">Standard A4</option>
                <option value="letter">US Letter</option>
                <option value="fit">Fit to Image Size</option>
              </select>
            </div>

            {/* Orientation */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300">Orientation</label>
              <select
                value={orientation}
                onChange={(e: any) => setOrientation(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="auto">Auto (Match Image Ratio)</option>
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
              </select>
            </div>

            {/* Margins */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300">Page Margin ({margin}mm)</label>
              <div className="flex items-center gap-3 pt-1">
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="5"
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="flex-grow accent-cyan-400"
                />
                <span className="font-mono font-bold text-cyan-400 w-8">{margin}mm</span>
              </div>
            </div>

          </div>

          {/* Reorderable Image Cards Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>{images.length} Image(s) added (drag or use arrows to rearrange sequence)</span>
              <button
                onClick={() => setImages([])}
                className="text-rose-400 hover:underline"
              >
                Clear all
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((item, index) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400">Page {index + 1}</span>
                    <span className="text-[11px] font-mono text-slate-500">{item.sizeKb} KB</span>
                  </div>

                  <div className="h-36 bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-1 border border-slate-800">
                    <img
                      src={item.previewUrl}
                      alt={item.file.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => moveImage(index, 'up')}
                        disabled={index === 0}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 transition"
                        title="Move Page Up"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => moveImage(index, 'down')}
                        disabled={index === images.length - 1}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 transition"
                        title="Move Page Down"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeImage(item.id)}
                      className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition"
                      title="Remove Image"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Converts {images.length} images into a single combined document</span>
            </div>

            <button
              onClick={handleGeneratePdf}
              disabled={isGenerating || images.length === 0}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Building PDF Document...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Convert &amp; Download PDF</span>
                </>
              )}
            </button>
          </div>

          {pdfGenerated && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
              <FileCheck className="w-5 h-5 shrink-0" />
              <span>PDF document generated and downloaded successfully!</span>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
