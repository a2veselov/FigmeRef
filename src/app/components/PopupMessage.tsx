import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

interface PopupMessageProps {
  type?: "success" | "error" | "info" | "warning";
  title: string;
  message: string;
  onClose: () => void;
  actionText?: string;
  onAction?: () => void;
}

export function PopupMessage({
  type = "info",
  title,
  message,
  onClose,
  actionText,
  onAction,
}: PopupMessageProps) {
  const iconMap = {
    success: { icon: CheckCircle, color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/30" },
    error: { icon: AlertCircle, color: "text-red-400", bg: "bg-red-500/20", border: "border-red-500/30" },
    info: { icon: Info, color: "text-sa-blue", bg: "bg-sa-blue/20", border: "border-sa-blue/30" },
    warning: { icon: AlertTriangle, color: "text-sa-yellow", bg: "bg-sa-yellow/20", border: "border-sa-yellow/30" },
  };

  const { icon: Icon, color, bg, border } = iconMap[type];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 animate-in fade-in">
      <div className="bg-sa-navy-light w-full max-w-sm rounded-3xl border border-sa-navy-lighter overflow-hidden animate-in zoom-in-95">
        {/* Header */}
        <div className="p-6 pb-0">
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-sa-navy-lighter flex items-center justify-center active:scale-95 transition-transform"
            >
              <X className="w-5 h-5 text-sa-text" />
            </button>
          </div>

          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 rounded-2xl ${bg} border ${border} flex items-center justify-center`}>
              <Icon className={`w-8 h-8 ${color}`} />
            </div>
          </div>

          <h3 className="text-sa-text text-xl text-center mb-3">{title}</h3>
          <p className="text-sa-text-muted text-center mb-6">{message}</p>
        </div>

        {/* Actions */}
        <div className="p-6 space-y-3">
          {actionText && onAction && (
            <button
              onClick={onAction}
              className="w-full bg-sa-yellow text-sa-navy py-3 rounded-2xl transition-all active:scale-95"
            >
              {actionText}
            </button>
          )}
          <button
            onClick={onClose}
            className="w-full bg-transparent border-2 border-sa-navy-lighter text-sa-text py-3 rounded-2xl transition-all active:scale-95"
          >
            {actionText ? "Cancel" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
