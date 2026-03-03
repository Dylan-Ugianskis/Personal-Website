import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "Dylanugi@outlook.com";

  const copytoClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={copytoClipboard}
      className="group relative inline-flex items-center gap-2.5 mt-4 px-6 py-3 rounded-xl
        bg-gradient-to-r from-white/[0.06] to-white/[0.02]
        border border-white/10 hover:border-white/25
        backdrop-blur-sm cursor-pointer
        transition-all duration-300 hover:shadow-lg hover:shadow-lavender/10"
    >
      {/* Icon */}
      <span className="relative w-5 h-5 shrink-0">
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.svg
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </motion.svg>
          ) : (
            <motion.svg
              key="copy"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 text-white/60 group-hover:text-white/90 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>

      {/* Text */}
      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
        {copied ? "Copied!" : "Copy my email"}
      </span>

      {/* Subtle glow on hover */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-lavender/0 via-lavender/5 to-lavender/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </button>
  );
};

export default CopyEmailButton;
