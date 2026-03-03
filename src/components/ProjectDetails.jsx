import { useEffect } from "react";
import { motion } from "motion/react";

const statusConfig = {
  live: { bg: "rgba(34, 197, 94, 0.15)", text: "#22c55e", border: "rgba(34, 197, 94, 0.3)", label: "Live" },
  built: { bg: "rgba(59, 130, 246, 0.15)", text: "#3b82f6", border: "rgba(59, 130, 246, 0.3)", label: "Built" },
  "in-progress": { bg: "rgba(251, 191, 36, 0.15)", text: "#fbbf24", border: "rgba(251, 191, 36, 0.3)", label: "In Progress" },
  designed: { bg: "rgba(168, 85, 247, 0.15)", text: "#a855f7", border: "rgba(168, 85, 247, 0.3)", label: "Designed" },
  active: { bg: "rgba(20, 184, 166, 0.15)", text: "#14b8a6", border: "rgba(20, 184, 166, 0.3)", label: "Active" },
};

const ProjectDetails = ({
  title,
  description,
  subtitle,
  category,
  icon,
  stack,
  status,
  link,
  closeModal,
}) => {
  const statusStyle = statusConfig[status] || statusConfig.built;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-lg w-[90%] border shadow-2xl rounded-2xl bg-gradient-to-br from-midnight via-navy to-midnight border-white/10"
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-full top-4 right-4 bg-white/5 hover:bg-white/15 transition-colors z-10"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="Close" />
        </button>

        {/* Header area with icon + category */}
        <div className="p-6 pb-4">
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgb(142, 249, 252)" }}
                >
                  {category}
                </span>
                <span
                  className="text-[0.65rem] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full"
                  style={{
                    background: statusStyle.bg,
                    color: statusStyle.text,
                    border: `1px solid ${statusStyle.border}`,
                  }}
                >
                  {statusStyle.label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">
                {title}
              </h3>
              <p className="text-sm text-neutral-400 mt-0.5">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Description */}
        <div className="p-6 pt-4 pb-4">
          <p className="text-sm text-neutral-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech stack pills */}
        {stack && stack.length > 0 && (
          <div className="px-6 pb-4">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.75)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer with link */}
        <div className="p-6 pt-3 flex items-center justify-end">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-aqua hover:text-white transition-colors cursor-pointer group"
            >
              View Project
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
