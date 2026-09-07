import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield } from 'lucide-react';

const HCAPTCHA_SITEKEY = "5856f3e0-ee30-4a62-aaea-541c9976824a";

export default function AgeVerify({ onVerify }) {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const captchaRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hcaptcha.com/1/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.onHCaptchaSuccess = (token) => {
      console.log("hCaptcha Success Token:", token);
      setIsCaptchaVerified(true);
      setIsVerifying(false);
    };

    window.onHCaptchaError = (error) => {
      console.error("hCaptcha Error:", error);
      setIsVerifying(false);
    };

    return () => {
      const scripts = document.querySelectorAll('script[src*="hcaptcha"]');
      scripts.forEach(s => s.remove());
      delete window.onHCaptchaSuccess;
      delete window.onHCaptchaError;
    };
  }, []);

  const handleVerifyClick = () => {
    if (!isCaptchaVerified) {
      setIsVerifying(true);
      if (window.hcaptcha) {
        window.hcaptcha.execute(widgetIdRef.current);
      } else {
        alert("hCaptcha is loading, please wait.");
        setIsVerifying(false);
      }
    } else {
      onVerify();
    }
  };

  useEffect(() => {
    const checkHCaptcha = setInterval(() => {
      if (window.hcaptcha && captchaRef.current) {
        widgetIdRef.current = window.hcaptcha.render(captchaRef.current, {
          sitekey: HCAPTCHA_SITEKEY,
          theme: 'dark',
          callback: (token) => {
            console.log("Captcha resolved:", token);
            setIsCaptchaVerified(true);
            setIsVerifying(false);
          },
          'error-callback': (error) => {
            console.error("Captcha error:", error);
            setIsVerifying(false);
          },
          'expired-callback': () => {
            console.warn("Captcha expired, resetting.");
            setIsCaptchaVerified(false);
          }
        });
        clearInterval(checkHCaptcha);
      }
    }, 100);

    return () => clearInterval(checkHCaptcha);
  }, []);

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
            <div 
              ref={captchaRef} 
              id="hcaptcha-container" 
              className="h-captcha"
              data-sitekey={HCAPTCHA_SITEKEY}
              data-theme="dark"
            ></div>
          </div>
          
          <div className="flex flex-col w-full gap-3">
            <button
              onClick={handleVerifyClick}
              disabled={isVerifying || !isCaptchaVerified}
              className={`w-full py-3 font-mono uppercase tracking-wider font-bold rounded-sm transition-all ${
                isCaptchaVerified 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(255,0,68,0.3)]' 
                  : 'bg-primary/50 text-primary-foreground/70 cursor-not-allowed'
              }`}
            >
              {isVerifying ? 'Verifying...' : isCaptchaVerified ? 'I AM 18+ / ACCEPT' : 'Verify Captcha First'}
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
