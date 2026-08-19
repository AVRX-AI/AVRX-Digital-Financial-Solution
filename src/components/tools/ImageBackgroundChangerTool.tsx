import React, { useState, useRef } from 'react';
import { 
  Image as ImageIcon, 
  Upload, 
  Download, 
  RefreshCw, 
  Sliders, 
  Sparkles, 
  Palette, 
  Check, 
  Layers 
} from 'lucide-react';

export const ImageBackgroundChangerTool: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState<string>('#00f0ff');
  const [bgType, setBgType] = useState<'solid' | 'gradient' | 'transparent'>('solid');
  const [gradientEnd, setGradientEnd] = useState<string>('#3b82f6');
  const [tolerance, setTolerance] = useState<number>(35);
  const [processing, setProcessing] = useState<boolean>(false);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const presetColors = [
    '#ffffff', '#000000', '#00f0ff', '#3b82f6', '#10b981', 
    '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#1e293b'
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target?.result as string;
        setImageSrc(url);
        processBackground(url, bgColor, gradientEnd, bgType, tolerance);
      };
      reader.readAsDataURL(file);
    }
  };

  const processBackground = (
    imgUrl: string, 
    color1: string, 
    color2: string, 
    type: 'solid' | 'gradient' | 'transparent', 
    tol: number
  ) => {
    setProcessing(true);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;

      // Draw original image to get pixel data
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      // Sample corner color to detect current background
      const targetR = data[0];
      const targetG = data[1];
      const targetB = data[2];

      // Prepare background on new canvas
      const outCanvas = document.createElement('canvas');
      const outCtx = outCanvas.getContext('2d');
      if (!outCtx) return;

      outCanvas.width = img.width;
      outCanvas.height = img.height;

      if (type === 'solid') {
        outCtx.fillStyle = color1;
        outCtx.fillRect(0, 0, outCanvas.width, outCanvas.height);
      } else if (type === 'gradient') {
        const grad = outCtx.createLinearGradient(0, 0, outCanvas.width, outCanvas.height);
        grad.addColorStop(0, color1);
        grad.addColorStop(1, color2);
        outCtx.fillStyle = grad;
        outCtx.fillRect(0, 0, outCanvas.width, outCanvas.height);
      }

      // Chroma replace algorithm
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Euclidean color distance from sampled background
        const dist = Math.sqrt(
          (r - targetR) ** 2 + 
          (g - targetG) ** 2 + 
          (b - targetB) ** 2
        );

        if (dist < tol * 2.55) {
          // If transparent mode, set alpha to 0; else let background show through
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imgData, 0, 0);

      // Composite foreground onto chosen background
      if (type !== 'transparent') {
        outCtx.drawImage(canvas, 0, 0);
        setProcessedUrl(outCanvas.toDataURL('image/png'));
      } else {
        setProcessedUrl(canvas.toDataURL('image/png'));
      }
      setProcessing(false);
    };
    img.src = imgUrl;
  };

  const handleApply = () => {
    if (imageSrc) {
      processBackground(imageSrc, bgColor, gradientEnd, bgType, tolerance);
    }
  };

  const handleDownload = () => {
    if (!processedUrl) return;
    const a = document.createElement('a');
    a.href = processedUrl;
    a.download = `avrx-bg-changed-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/30 text-white space-y-6">
      
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>AI Studio Image Utility</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Image Background Changer & Replacer
          </h3>
          <p className="text-xs text-slate-400">
            Replace, remove or gradient-color your image backgrounds directly in browser with high resolution.
          </p>
        </div>

        {processedUrl && (
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition"
          >
            <Download className="w-4 h-4" />
            <span>Download Result</span>
          </button>
        )}
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Controls Panel */}
        <div className="lg:col-span-4 space-y-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
          
          {/* Upload Button */}
          <div>
            <label className="text-xs font-mono uppercase text-slate-400 block mb-2 font-bold">
              1. Select Photo
            </label>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 font-bold text-xs transition"
            >
              <Upload className="w-4 h-4" />
              <span>{imageSrc ? 'Replace Image' : 'Upload Image (PNG/JPG)'}</span>
            </button>
          </div>

          {/* Background Mode Selector */}
          <div>
            <label className="text-xs font-mono uppercase text-slate-400 block mb-2 font-bold">
              2. Background Mode
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => { setBgType('solid'); }}
                className={`py-2 rounded-lg text-xs font-bold border transition ${
                  bgType === 'solid' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-300 border-slate-800'
                }`}
              >
                Solid Color
              </button>
              <button
                onClick={() => { setBgType('gradient'); }}
                className={`py-2 rounded-lg text-xs font-bold border transition ${
                  bgType === 'gradient' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-300 border-slate-800'
                }`}
              >
                Gradient
              </button>
              <button
                onClick={() => { setBgType('transparent'); }}
                className={`py-2 rounded-lg text-xs font-bold border transition ${
                  bgType === 'transparent' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-300 border-slate-800'
                }`}
              >
                Transparent
              </button>
            </div>
          </div>

          {/* Color Palette */}
          {bgType !== 'transparent' && (
            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-2 font-bold">
                {bgType === 'solid' ? 'Pick Primary Color' : 'Color 1 & Color 2'}
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {presetColors.map(c => (
                  <button
                    key={c}
                    onClick={() => setBgColor(c)}
                    style={{ backgroundColor: c }}
                    className={`w-7 h-7 rounded-full border-2 transition ${
                      bgColor === c ? 'border-cyan-400 scale-110 shadow-md' : 'border-slate-800'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <span className="font-mono text-xs text-slate-300">{bgColor}</span>

                {bgType === 'gradient' && (
                  <>
                    <input
                      type="color"
                      value={gradientEnd}
                      onChange={(e) => setGradientEnd(e.target.value)}
                      className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0 ml-4"
                    />
                    <span className="font-mono text-xs text-slate-300">{gradientEnd}</span>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Tolerance Slider */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Detection Sensitivity</span>
              <span className="font-mono text-cyan-400 font-bold">{tolerance}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={tolerance}
              onChange={(e) => setTolerance(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
          </div>

          {/* Re-apply button */}
          <button
            disabled={!imageSrc || processing}
            onClick={handleApply}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-xs transition disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${processing ? 'animate-spin' : ''}`} />
            <span>Apply Background</span>
          </button>

        </div>

        {/* Right Preview Canvas Area */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950 border border-slate-800 min-h-[350px] relative overflow-hidden">
          
          {processedUrl ? (
            <div className="relative max-h-[420px] max-w-full rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              <img
                src={processedUrl}
                alt="Processed background"
                className="max-h-[400px] w-auto object-contain block"
              />
            </div>
          ) : imageSrc ? (
            <div className="relative max-h-[400px] max-w-full rounded-xl overflow-hidden border border-slate-800">
              <img
                src={imageSrc}
                alt="Original preview"
                className="max-h-[380px] w-auto object-contain block opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs">
                <span className="text-xs font-mono text-cyan-300 font-bold bg-slate-900/90 px-3 py-1.5 rounded-lg border border-cyan-500/30">
                  Click 'Apply Background' to generate
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-3 text-slate-500">
              <ImageIcon className="w-12 h-12 mx-auto text-slate-700 animate-pulse" />
              <p className="text-xs font-mono">No image uploaded yet</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 text-xs font-bold border border-slate-800"
              >
                Select Photo from Device
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
