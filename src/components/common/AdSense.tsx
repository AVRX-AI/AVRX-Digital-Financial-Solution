import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSenseProps {
  className?: string;
}

export function AdSense({ className = '' }: AdSenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.warn('AdSense initialization failed:', error);
    }
  }, []);

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5556317709613603"
        data-ad-slot="8318684119"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
