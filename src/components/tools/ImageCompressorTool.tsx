import React, { useState, useRef } from 'react';
import JSZip from 'jszip';
import { 
  Minimize2, 
  UploadCloud, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Archive, 
  Trash2,
  Sliders,
  Sparkles
} from 'lucide-react';

interface CompressedImageItem {
  id: string;
  originalFile: File;
  originalSizeKb: number;
  compressedBlob: Blob;
  compressedDataUrl: string;
  compressedSizeKb: number;
  percentSaved: number;
  width: number;
  height: number;
}

export const ImageCompressorTool: React.FC = () => {
  const [items, setItems] = useState<CompressedImageItem[]>([]);
  const [quality, setQuality] = useState<number>(0.75);
  const [maxWidth, setMaxWidth] = useState<number>(1920);
  const [outputFormat, setOutputFormat] = useState<'image/jpeg' | 'image/webp' | 'image/png'>('image/jpeg');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isZipping, setIsZipping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const compressSingleImage = (
    file: File, 
    qual: number, 
    maxW: number, 
    format: string
  ): Promise<CompressedImageItem> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let targetW = img.width;
          let targetH = img.height;

          if (targetW > maxW) {
            targetH = Math.round((targetH * maxW) / targetW);
            targetW = maxW;
          }

          const canvas = document.createElement('canvas');
          canvas.width = targetW;
          canvas.height = targetH;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            reject(new Error('Canvas context not available'));
            return;
          }

          // White background for JPEG format
          if (format === 'image/jpeg') {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, targetW, targetH);
          }

          ctx.drawImage(img, 0, 0, targetW, targetH);

          canvas.toBlob((blob) => {
            if (!blob) {
              reject(new Error('Failed to compress blob'));
              return;
            }

            const compressedDataUrl = canvas.toDataURL(format, qual);
            const originalSizeKb = Math.round(file.size / 1024);
            const compressedSizeKb = Math.round(blob.size / 1024);
            const percentSaved = Math.max(0, Math.round(((originalSizeKb - compressedSizeKb) / originalSizeKb) * 100));

            resolve({
              id: `comp_${Date.now()}_${Math.random()}`,
              originalFile: file,
              originalSizeKb,
              compressedBlob: blob,
              compressedDataUrl,
              compressedSizeKb,
              percentSaved,
              width: targetW,
              height: targetH
            });
          }, format, qual);
        };
        img.onerror = () => reject(new Error('Failed to load image element'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const handleUploadImages = async (fileList: FileList | File[]) => {
    setError(null);
    setIsProcessing(true);
    const newCompressedList: CompressedImageItem[] = [];

    try {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        if (!file.type.startsWith('image/')) continue;
        const item = await compressSingleImage(file, quality, maxWidth, outputFormat);
        newCompressedList.push(item);
      }

      if (newCompressedList.length === 0) {
        setError('Please select valid image files (JPG, PNG, WebP).');
      } else {
        setItems(prev => [...prev, ...newCompressedList]);
      }
    } catch (err: any) {
      setError('Error compressing images: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const recompressAll = async (newQuality: number, newMaxWidth: number, newFormat: 'image/jpeg' | 'image/webp' | 'image/png') => {
    if (items.length === 0) return;
    setIsProcessing(true);

    try {
      const updated: CompressedImageItem[] = [];
      for (const item of items) {
        const recompressed = await compressSingleImage(item.originalFile, newQuality, newMaxWidth, newFormat);
        updated.push(recompressed);
      }
      setItems(updated);
    } catch (err: any) {
      setError('Recompression error: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadSingle = (item: CompressedImageItem) => {
    const ext = outputFormat === 'image/webp' ? '.webp' : outputFormat === 'image/png' ? '.png' : '.jpg';
    const baseName = item.originalFile.name.replace(/\.[^/.]+$/, '');
    const link = document.createElement('a');
    link.href = item.compressedDataUrl;
    link.download = `${baseName}_compressed_avrx${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllZip = async () => {
    if (items.length === 0) return;
    setIsZipping(true);

    try {
      const zip = new JSZip();
      const ext = outputFormat === 'image/webp' ? '.webp' : outputFormat === 'image/png' ? '.png' : '.jpg';

      items.forEach((item) => {
        const baseName = item.originalFile.name.replace(/\.[^/.]+$/, '');
        zip.file(`${baseName}_compressed_avrx${ext}`, item.compressedBlob);
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `compressed_images_avrx.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err: any) {
      setError('Failed to build ZIP: ' + err.message);
    } finally {
      setIsZipping(false);
    }
  };

  const totalOriginal = items.reduce((a, b) => a + b.originalSizeKb, 0);
  const totalCompressed = items.reduce((a, b) => a + b.compressedSizeKb, 0);
  const overallSavedPct = totalOriginal > 0 ? Math.round(((totalOriginal - totalCompressed) / totalOriginal) * 100) : 0;

  return (
    <div className="space-y-6">
      
      {/* Upload Drop Zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files) handleUploadImages(e.dataTransfer.files);
        }}
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-slate-700 hover:border-cyan-400 bg-slate-900/50 hover:bg-slate-900/80 rounded-2xl p-6 sm:p-10 text-center cursor-pointer transition flex flex-col items-center justify-center space-y-3 group"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => {
            if (e.target.files) handleUploadImages(e.target.files);
          }}
          accept="image/png,image/jpeg,image/webp,image/jpg"
          multiple
          className="hidden"
        />
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Minimize2 className="w-7 h-7 text-cyan-400" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-white">
            Upload Images to Compress (JPG, PNG, WebP)
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Compress single or batch images with real-time before vs after preview
          </p>
        </div>
        <span className="text-[11px] font-medium text-slate-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
          Save Up to 90% File Size • 100% Client-Side Private
        </span>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Real-time Compression Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs">
        
        {/* Quality Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-semibold">
            <span>Compression Quality</span>
            <span className="text-cyan-400 font-mono font-bold">{Math.round(quality * 100)}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="0.95"
            step="0.05"
            value={quality}
            onChange={(e) => {
              const q = Number(e.target.value);
              setQuality(q);
              recompressAll(q, maxWidth, outputFormat);
            }}
            className="w-full accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Smaller Size</span>
            <span>Higher Quality</span>
          </div>
        </div>

        {/* Max Resolution Resize */}
        <div className="space-y-1.5">
          <label className="font-semibold text-slate-300">Max Dimension (Width)</label>
          <select
            value={maxWidth}
            onChange={(e) => {
              const w = Number(e.target.value);
              setMaxWidth(w);
              recompressAll(quality, w, outputFormat);
            }}
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="3840">4K Ultra HD (3840px)</option>
            <option value="1920">Full HD (1920px) — Recommended</option>
            <option value="1280">Standard HD (1280px)</option>
            <option value="800">Web Banner (800px)</option>
            <option value="500">Thumbnail (500px)</option>
          </select>
        </div>

        {/* Output Format */}
        <div className="space-y-1.5">
          <label className="font-semibold text-slate-300">Output Format</label>
          <select
            value={outputFormat}
            onChange={(e: any) => {
              const fmt = e.target.value;
              setOutputFormat(fmt);
              recompressAll(quality, maxWidth, fmt);
            }}
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="image/jpeg">JPG / JPEG (Universal)</option>
            <option value="image/webp">WebP (Modern &amp; Smallest)</option>
            <option value="image/png">PNG (Preserve Alpha)</option>
          </select>
        </div>

      </div>

      {/* Compressed Items List */}
      {items.length > 0 && (
        <div className="space-y-4">
          
          {/* Summary Stats Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-emerald-950/40 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-sm">
                -{overallSavedPct}%
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">
                  Saved {totalOriginal - totalCompressed} KB total bandwidth
                </h4>
                <p className="text-xs text-slate-400">
                  Reduced from {totalOriginal} KB to {totalCompressed} KB across {items.length} images
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={downloadAllZip}
                disabled={isZipping}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow transition flex items-center gap-1.5"
              >
                {isZipping ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Packing ZIP...</span>
                  </>
                ) : (
                  <>
                    <Archive className="w-3.5 h-3.5" />
                    <span>Download All as ZIP</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setItems([])}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition text-xs"
                title="Clear all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs truncate max-w-[180px]">
                      {item.originalFile.name}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      -{item.percentSaved}%
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {item.width} × {item.height} px
                  </p>
                </div>

                {/* Thumbnail Preview */}
                <div className="h-40 bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-1 border border-slate-800">
                  <img
                    src={item.compressedDataUrl}
                    alt={item.originalFile.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Size Stats */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Original:</span>
                    <span className="font-mono text-slate-300 line-through">{item.originalSizeKb} KB</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 block text-[10px] font-semibold">Compressed:</span>
                    <span className="font-mono font-bold text-emerald-400">{item.compressedSizeKb} KB</span>
                  </div>
                </div>

                {/* Individual Download */}
                <button
                  onClick={() => downloadSingle(item)}
                  className="w-full py-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
