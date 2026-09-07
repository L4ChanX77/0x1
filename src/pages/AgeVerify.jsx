import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const HCAPTCHA_SITEKEY = "5856f3e0-ee30-4a62-aaea-541c9976824a";

export default function AgeVerify({ onVerify }) {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const isRenderedRef = useRef(false);

  // تحميل سكربت hCaptcha
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hcaptcha.com/1/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log('hCaptcha script loaded');
      renderWidget();
    };
    document.head.appendChild(script);

    // دوال callback العامة
    window.onHCaptchaSuccess = (token) => {
      console.log('hCaptcha Success:', token);
      setIsCaptchaVerified(true);
      setIsVerifying(false);
    };

    window.onHCaptchaError = (error) => {
      console.error('hCaptcha Error:', error);
      setIsVerifying(false);
    };

    window.onHCaptchaExpired = () => {
      console.warn('hCaptcha Expired');
      setIsCaptchaVerified(false);
    };

    return () => {
      const scripts = document.querySelectorAll('script[src*="hcaptcha"]');
      scripts.forEach(s => s.remove());
      delete window.onHCaptchaSuccess;
      delete window.onHCaptchaError;
      delete window.onHCaptchaExpired;
    };
  }, []);

  // عرض الـ widget
  const renderWidget = () => {
    if (!window.hcaptcha || !containerRef.current || isRenderedRef.current) return;

    try {
      widgetIdRef.current = window.hcaptcha.render(containerRef.current, {
        sitekey: HCAPTCHA_SITEKEY,
        theme: 'dark',
        size: 'normal',
        callback: (token) => {
          console.log('Captcha resolved:', token);
          setIsCaptchaVerified(true);
          setIsVerifying(false);
        },
        'error-callback': (error) => {
          console.error('Captcha error:', error);
          setIsVerifying(false);
        },
        'expired-callback': () => {
          console.warn('Captcha expired');
          setIsCaptchaVerified(false);
        },
      });
      isRenderedRef.current = true;
      console.log('hCaptcha rendered with ID:', widgetIdRef.current);
    } catch (error) {
      console.error('Failed to render hCaptcha:', error);
    }
  };

  // محاولة عرض الويدجت عند تحميل المكون
  useEffect(() => {
    const checkAndRender = () => {
      if (window.hcaptcha && containerRef.current && !isRenderedRef.current) {
        renderWidget();
        return true;
      }
      return false;
    };

    if (!checkAndRender()) {
      const interval = setInterval(() => {
        if (checkAndRender()) {
          clearInterval(interval);
        }
      }, 500);
      setTimeout(() => clearInterval(interval), 10000);
      return () => clearInterval(interval);
    }
  }, []);

  // دالة عند الضغط على الزر
  const handleVerifyClick = () => {
    if (isCaptchaVerified) {
      onVerify();
      return;
    }

    setIsVerifying(true);
    if (window.hcaptcha && widgetIdRef.current !== null) {
      try {
        window.hcaptcha.execute(widgetIdRef.current);
      } catch (error) {
        console.error('Failed to execute hCaptcha:', error);
        setIsVerifying(false);
        isRenderedRef.current = false;
        renderWidget();
      }
    } else {
      isRenderedRef.current = false;
      renderWidget();
      setIsVerifying(false);
      alert('Loading captcha, please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-black z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md bg-card border border-primary/50 p-8 rounded-lg shadow-[0_0_30px_rgba(255,0,68,0.15)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,68,0.5)_10px,rgba(255,0,68,0.5)_20px)]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/30">
            <Shield size={32} className="text-primary drop-shadow-[0_0_8px_rgba(255,0,68,0.8)]" />
          </div>
          <h2 className="font-mono text-2xl font-bold text-foreground mb-4 uppercase tracking-wider">Access Restricted</h2>
          <p className="text-muted-foreground font-sans mb-6 leading-relaxed text-sm">
            This system contains advanced network security tools, payload configurations, and unfiltered research data.
            <br /><br />
            By proceeding, you confirm that you are at least <strong className="text-primary">18 years of age</strong> and agree to use this information for educational and research purposes only.
          </p>
          
          <div className="w-full mb-6 flex justify-center">
            <div ref={containerRef} id="hcaptcha-container" className="h-captcha"></div>
          </div>
          
          <div className="flex flex-col w-full gap-3">
            <button
              onClick={handleVerifyClick}
              disabled={!isCaptchaVerified && !isVerifying}
              className={`w-full py-3 font-mono uppercase tracking-wider font-bold rounded-sm transition-all ${
                isCaptchaVerified
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(255,0,68,0.3)] cursor-pointer'
                  : isVerifying
                  ? 'bg-primary/30 text-primary-foreground/70 cursor-wait'
                  : 'bg-primary/50 text-primary-foreground/70 cursor-not-allowed'
              }`}
            >
              {isVerifying ? 'Verifying...' : isCaptchaVerified ? 'I AM 18+ / ACCEPT' : 'VERIFY CAPTCHA FIRST'}
            </button>
            <button
              onClick={() => window.location.href = 'https://google.com'}
              className="w-full py-3 bg-transparent border border-border text-muted-foreground font-mono uppercase tracking-wider hover:bg-white/5 transition-colors rounded-sm"
            >
              EXIT
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground/50 mt-4 font-mono">
            Protected by hCaptcha. See <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noreferrer" className="text-primary">Privacy Policy</a> and <a href="https://www.hcaptcha.com/terms" target="_blank" rel="noreferrer" className="text-primary">Terms of Service</a>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
