
import React from 'react';

const Marquee: React.FC = () => {
  // SVG Logos for a premium tech feel (Monochromatic)
  const logos = [
    // OpenAI
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a1.558 1.558 0 0 1 .6966 1.2336v5.6661a4.4994 4.4994 0 0 1-5.1531 3.2293zm-9.3708-3.9926a4.4565 4.4565 0 0 1-.3669-3.0487l.1419.0804 4.7783 2.7582a.7948.7948 0 0 0 .7854 0l5.8354-3.3765v2.3372a1.558 1.558 0 0 1-.6966 1.2337l-4.9081 2.834a4.4946 4.4946 0 0 1-5.5694-2.8183zm-1.222-10.0526a4.4707 4.4707 0 0 1 2.5095-1.7291l.1419.0804 1.8606 1.074a.7948.7948 0 0 0 .7854 0l5.8354-3.3765-.1465-1.2635a1.558 1.558 0 0 1 1.0931-1.6318l5.6377-.9751a4.4946 4.4946 0 0 1-4.2268 4.7554zM16.92 2.8876a4.4707 4.4707 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a1.558 1.558 0 0 1-.6966-1.2336V6.0967A4.4994 4.4994 0 0 1 16.92 2.8876zm5.8206 5.3725c.3466 1.003.2238 2.102-.3419 3.0163l-.1419-.0804-4.7783-2.7582a.7948.7948 0 0 0-.7854 0L10.8577 11.8143v-2.3372a1.558 1.558 0 0 1 .6966-1.2337l4.9081-2.834a4.4946 4.4946 0 0 1 6.2782 2.8488zm-1.8972 9.5878a4.4707 4.4707 0 0 1-2.5095 1.7291l-.1419-.0804-1.8606-1.074a.7948.7948 0 0 0-.7854 0L9.71 21.8011l.1465 1.2635a1.558 1.558 0 0 1-1.0931 1.6318l-5.6377.9751a4.4946 4.4946 0 0 1 12.8722-10.126zM12 14.2588a2.2588 2.2588 0 1 1 0-4.5176 2.2588 2.2588 0 0 1 0 4.5176z"/>
    </svg>,
    // Python
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
      <path d="M14.25.75l-.9.82h-3.2l-1.42 1.58.6.68h3.3l.75-.75-.08-1.5zM18.75 3v12h-4.5v-1.5h3v-9h-9v3h-1.5v-4.5h12zM9.75 6.75v1.5h1.5v-1.5h-1.5zM3 8.25v9h3.75v3l1.5 1.5h5.25l1.5-1.5v-2.25h-1.5v.75H9.75v-3h4.5v-6h-9.75v6H6v-7.5l-3-1.5v1.5zM13.5 16.5v1.5h1.5v-1.5h-1.5z"/>
    </svg>,
    // HubSpot
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm3.5-8a3.5 3.5 0 1 1-3.5-3.5 3.504 3.504 0 0 1 3.5 3.5zm-5 0a1.5 1.5 0 1 1-1.5-1.5 1.502 1.502 0 0 1 1.5 1.5zm6.5 4.5a1.5 1.5 0 1 1-1.5-1.5 1.502 1.502 0 0 1 1.5 1.5zm-4.5 2a1.5 1.5 0 1 1-1.5-1.5 1.502 1.502 0 0 1 1.5 1.5z"/>
    </svg>,
    // AWS
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
       <path d="M16.5 13.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5c1.1 0 2.12.39 2.93 1.03l-1.06 1.06c-.5-.4-1.15-.64-1.87-.64-1.66 0-3 1.34-3 3s1.34 3 3 3c.72 0 1.37-.24 1.87-.64l1.06 1.06c-.81.65-1.83 1.04-2.93 1.04zm5.5-2.5h-1.5v-4h1.5v4z"/>
    </svg>,
    // n8n
    <svg viewBox="0 0 40 24" fill="currentColor" className="w-12 h-8 md:w-16 md:h-10">
       <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="bold" fontFamily="'Inter', sans-serif">n8n</text>
    </svg>,
    // React/Next
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
      <ellipse cx="12" cy="12" rx="2" ry="5" transform="rotate(45 12 12)"/>
      <ellipse cx="12" cy="12" rx="2" ry="5" transform="rotate(-45 12 12)"/>
    </svg>,
     // Google Cloud
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-2v2h-2v-2H8v-2h4v-2h2v2h2v2z"/>
    </svg>
  ];

  return (
    <div className="w-full py-8 bg-canvas border-b border-gray-100 overflow-hidden relative z-20 flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-canvas to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-canvas to-transparent z-10"></div>
      
      <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
        {/* First Loop */}
        <div className="flex whitespace-nowrap min-w-full justify-around items-center px-8 gap-20">
          {logos.map((logo, index) => (
            <div key={`1-${index}`} className="opacity-30 hover:opacity-100 text-gray-500 hover:text-ink transition-all duration-300 transform hover:scale-110 cursor-pointer">
              {logo}
            </div>
          ))}
        </div>
        {/* Second Loop (Seamless) */}
        <div className="flex whitespace-nowrap min-w-full justify-around items-center px-8 gap-20">
           {logos.map((logo, index) => (
            <div key={`2-${index}`} className="opacity-30 hover:opacity-100 text-gray-500 hover:text-ink transition-all duration-300 transform hover:scale-110 cursor-pointer">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
