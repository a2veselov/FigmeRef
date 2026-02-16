import { X } from "lucide-react";
import { useState } from "react";

interface TargetPlayerPopupProps {
  onClose: () => void;
}

export function TargetPlayerPopup({ onClose }: TargetPlayerPopupProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  const players = [
    { id: "p1", name: "AntonM2", emoji: "🔥", online: true },
    { id: "p2", name: "Secondary", emoji: "😊", online: true },
    { id: "p3", name: "Player3", emoji: "🎭", online: false },
    { id: "p4", name: "Player4", emoji: "🎪", online: true },
  ];

  const handleTarget = () => {
    // Handle targeting logic
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 animate-in fade-in">
      <div className="bg-sa-navy-light w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl max-h-[80vh] flex flex-col animate-in slide-in-from-bottom sm:slide-in-from-bottom-0">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sa-navy-lighter">
          <h3 className="text-sa-text text-xl">Select Target Player</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-sa-navy-lighter flex items-center justify-center active:scale-95 transition-transform"
          >
            <X className="w-5 h-5 text-sa-text" />
          </button>
        </div>

        {/* Player List */}
        <div className="flex-1 overflow-auto p-6">
          <p className="text-sa-text-muted mb-4">
            Choose a player to target with this mission
          </p>
          <div className="space-y-3">
            {players.map((player) => (
              <button
                key={player.id}
                onClick={() => setSelectedPlayer(player.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all active:scale-98 ${
                  selectedPlayer === player.id
                    ? "border-sa-yellow bg-sa-yellow/10"
                    : "border-sa-navy-lighter bg-sa-navy"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{player.emoji}</span>
                  <div className="flex-1 text-left">
                    <p className="text-sa-text">{player.name}</p>
                    <p className={`text-sm ${player.online ? "text-green-400" : "text-sa-text-muted"}`}>
                      {player.online ? "● Online" : "○ Offline"}
                    </p>
                  </div>
                  {selectedPlayer === player.id && (
                    <div className="w-6 h-6 rounded-full bg-sa-yellow flex items-center justify-center">
                      <span className="text-sa-navy text-sm">✓</span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-sa-navy-lighter">
          <button
            onClick={handleTarget}
            disabled={!selectedPlayer}
            className="w-full bg-sa-yellow text-sa-navy py-4 rounded-2xl transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            Confirm Target
          </button>
        </div>
      </div>
    </div>
  );
}
