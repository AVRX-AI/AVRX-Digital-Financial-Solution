import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { 
  QrCode, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  Link, 
  Wifi, 
  IndianRupee, 
  Phone, 
  Mail, 
  User, 
  FileText,
  Sparkles,
  CheckCircle2,
  Share2
} from 'lucide-react';

export const QrCodeGeneratorTool: React.FC = () => {
  const [qrType, setQrType] = useState<'url' | 'upi' | 'wifi' | 'vcard' | 'text' | 'whatsapp'>('url');
  
  // Specific Data fields
  const [urlValue, setUrlValue] = useState('https://avrx.in');
  const [textValue, setTextValue] = useState('Welcome to AVRX Digital & Financial Solution');
  
  // UPI Payment fields
  const [upiVpa, setUpiVpa] = useState('avrx@okhdfcbank');
  const [upiName, setUpiName] = useState('AVRX Solution');
  const [upiAmount, setUpiAmount] = useState('500');
  const [upiNote, setUpiNote] = useState('Payment for AVRX Services');

  // WiFi fields
  const [wifiSsid, setWifiSsid] = useState('Office_WiFi_5G');
  const [wifiPassword, setWifiPassword] = useState('avrx@2025');
  const [wifiAuth, setWifiAuth] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');

  // vCard fields
  const [vcardName, setVcardName] = useState('AVRX Official');
  const [vcardPhone, setVcardPhone] = useState('+91 9876543210');
  const [vcardEmail, setVcardEmail] = useState('support@avrx.in');
  const [vcardOrg, setVcardOrg] = useState('AVRX Digital & Financial Solution');

  // WhatsApp fields
  const [waPhone, setWaPhone] = useState('919876543210');
  const [waMessage, setWaMessage] = useState('Hello AVRX, I would like to inquire about your services.');

  // QR Appearance Settings
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [errorLevel, setErrorLevel] = useState<'L' | 'M' | 'Q' | 'H'>('H');
  const [margin, setMargin] = useState<number>(2);
  const [qrSize, setQrSize] = useState<number>(512);

  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Compute Raw String for QR
  const rawQrString = React.useMemo(() => {
    switch (qrType) {
      case 'url':
        return urlValue.trim() || 'https://avrx.in';
      case 'text':
        return textValue || ' ';
      case 'upi': {
        const params = new URLSearchParams();
        params.append('pa', upiVpa);
        params.append('pn', upiName);
        if (upiAmount) params.append('am', upiAmount);
        params.append('cu', 'INR');
        if (upiNote) params.append('tn', upiNote);
        return `upi://pay?${params.toString()}`;
      }
      case 'wifi':
        return `WIFI:T:${wifiAuth};S:${wifiSsid};P:${wifiPassword};;`;
      case 'vcard':
        return `BEGIN:VCARD\nVERSION:3.0\nN:${vcardName}\nFN:${vcardName}\nORG:${vcardOrg}\nTEL:${vcardPhone}\nEMAIL:${vcardEmail}\nEND:VCARD`;
      case 'whatsapp': {
        const cleanPhone = waPhone.replace(/\D/g, '');
        return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waMessage)}`;
      }
      default:
        return 'https://avrx.in';
    }
  }, [qrType, urlValue, textValue, upiVpa, upiName, upiAmount, upiNote, wifiSsid, wifiPassword, wifiAuth, vcardName, vcardPhone, vcardEmail, vcardOrg, waPhone, waMessage]);

  // Render QR Code in Canvas
  useEffect(() => {
    let isCancelled = false;

    const generateQr = async () => {
      try {
        const url = await QRCode.toDataURL(rawQrString, {
          width: qrSize,
          margin: margin,
          errorCorrectionLevel: errorLevel,
          color: {
            dark: fgColor,
            light: bgColor,
          }
        });

        if (!isCancelled) {
          setQrDataUrl(url);
        }
      } catch (err) {
        console.error('QR Generation error:', err);
      }
    };

    generateQr();

    return () => {
      isCancelled = true;
    };
  }, [rawQrString, fgColor, bgColor, errorLevel, margin, qrSize]);

  const handleDownloadPng = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `avrx_qrcode_${qrType}_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadSvg = async () => {
    try {
      const svgString = await QRCode.toString(rawQrString, {
        type: 'svg',
        margin: margin,
        errorCorrectionLevel: errorLevel,
        color: {
          dark: fgColor,
          light: bgColor,
        }
      });
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `avrx_qrcode_${qrType}_${Date.now()}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('SVG download error', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-semibold">
        <button
          onClick={() => setQrType('url')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition ${
            qrType === 'url' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Link className="w-3.5 h-3.5" />
          <span>Website URL</span>
        </button>

        <button
          onClick={() => setQrType('upi')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition ${
            qrType === 'upi' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          <IndianRupee className="w-3.5 h-3.5" />
          <span>UPI Payment</span>
        </button>

        <button
          onClick={() => setQrType('wifi')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition ${
            qrType === 'wifi' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Wifi className="w-3.5 h-3.5" />
          <span>WiFi Network</span>
        </button>

        <button
          onClick={() => setQrType('whatsapp')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition ${
            qrType === 'whatsapp' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>WhatsApp Chat</span>
        </button>

        <button
          onClick={() => setQrType('vcard')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition ${
            qrType === 'vcard' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Contact vCard</span>
        </button>

        <button
          onClick={() => setQrType('text')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition ${
            qrType === 'text' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Plain Text</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: Data & Customization */}
        <div className="lg:col-span-7 space-y-6 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
          
          {/* Dynamic Inputs according to QR Type */}
          {qrType === 'url' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Target Website URL
              </label>
              <input
                type="url"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none font-mono"
              />
            </div>
          )}

          {qrType === 'upi' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Payee UPI ID (VPA)</label>
                  <input
                    type="text"
                    value={upiVpa}
                    onChange={(e) => setUpiVpa(e.target.value)}
                    placeholder="name@okhdfcbank"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Payee Name / Business</label>
                  <input
                    type="text"
                    value={upiName}
                    onChange={(e) => setUpiName(e.target.value)}
                    placeholder="AVRX Solution"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Amount in INR (Optional)</label>
                  <input
                    type="number"
                    value={upiAmount}
                    onChange={(e) => setUpiAmount(e.target.value)}
                    placeholder="Leave empty for user-defined"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Transaction Note</label>
                  <input
                    type="text"
                    value={upiNote}
                    onChange={(e) => setUpiNote(e.target.value)}
                    placeholder="Payment for invoice"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {qrType === 'wifi' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">WiFi SSID (Network Name)</label>
                  <input
                    type="text"
                    value={wifiSsid}
                    onChange={(e) => setWifiSsid(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">WiFi Password</label>
                  <input
                    type="text"
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <label className="font-semibold text-slate-300">Encryption Type</label>
                <select
                  value={wifiAuth}
                  onChange={(e: any) => setWifiAuth(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="WPA">WPA / WPA2 / WPA3 (Standard)</option>
                  <option value="WEP">WEP (Legacy)</option>
                  <option value="nopass">None (Open Network)</option>
                </select>
              </div>
            </div>
          )}

          {qrType === 'whatsapp' && (
            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">WhatsApp Phone Number (with Country Code)</label>
                <input
                  type="text"
                  value={waPhone}
                  onChange={(e) => setWaPhone(e.target.value)}
                  placeholder="919876543210"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Prefilled Message</label>
                <textarea
                  rows={3}
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none leading-relaxed"
                />
              </div>
            </div>
          )}

          {qrType === 'vcard' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Full Name</label>
                <input
                  type="text"
                  value={vcardName}
                  onChange={(e) => setVcardName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Phone Number</label>
                <input
                  type="text"
                  value={vcardPhone}
                  onChange={(e) => setVcardPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Email Address</label>
                <input
                  type="email"
                  value={vcardEmail}
                  onChange={(e) => setVcardEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Organization</label>
                <input
                  type="text"
                  value={vcardOrg}
                  onChange={(e) => setVcardOrg(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
          )}

          {qrType === 'text' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Plain Text Content
              </label>
              <textarea
                rows={4}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none leading-relaxed"
              />
            </div>
          )}

          {/* Color & Styling Options */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Visual Styling &amp; Error Correction
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="space-y-1.5">
                <label className="text-slate-400">QR Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <span className="font-mono text-[11px] text-slate-300">{fgColor}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400">Background</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <span className="font-mono text-[11px] text-slate-300">{bgColor}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400">Error Correction</label>
                <select
                  value={errorLevel}
                  onChange={(e: any) => setErrorLevel(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                >
                  <option value="L">L (7% Recovery)</option>
                  <option value="M">M (15% Recovery)</option>
                  <option value="Q">Q (25% Recovery)</option>
                  <option value="H">H (30% Best)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400">Export Res</label>
                <select
                  value={qrSize}
                  onChange={(e) => setQrSize(Number(e.target.value))}
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none font-mono"
                >
                  <option value={256}>256 px</option>
                  <option value={512}>512 px (HD)</option>
                  <option value={1024}>1024 px (Print)</option>
                  <option value={2048}>2048 px (Ultra)</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Right Output: QR Preview & Download */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center space-y-5 shadow-2xl">
            
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Live Vector QR Preview
            </span>

            {/* Rendered QR Card */}
            <div className="p-4 bg-white rounded-2xl shadow-xl border border-slate-200 aspect-square flex items-center justify-center max-w-[260px] w-full">
              {qrDataUrl && (
                <img
                  src={qrDataUrl}
                  alt="Generated QR Code"
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">
              <button
                onClick={handleDownloadPng}
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PNG</span>
              </button>

              <button
                onClick={handleDownloadSvg}
                className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs transition flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Vector SVG</span>
              </button>
            </div>

            {/* Scan Info */}
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Compatible with all smartphone cameras, Google Lens &amp; Pay</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
