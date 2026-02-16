import { X } from "lucide-react";
import { useState } from "react";

interface SendAccusationPopupProps {
  onClose: () => void;
}

export function SendAccusationPopup({ onClose }: SendAccusationPopupProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [selectedMission, setSelectedMission] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const players = [
    { id: "p1", name: "AntonM2", emoji: "🔥" },
    { id: "p2", name: "Secondary", emoji: "😊" },
    { id: "p3", name: "Player3", emoji: "🎭" },
  ];

  const missions = [
    { id: "m1", title: "The Compliment Chain" },
    { id: "m2", title: "Memory Master" },
    { id: "m3", title: "The Questioner" },
    { id: "m4", title: "Dance Move Copycat" },
    { id: "m5", title: "Secret Handshake" },
  ];

  const handleSend = () => {
    // Handle send accusation logic
    onClose();
  };

  const canSend = selectedPlayer && selectedMission;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 animate-in fade-in">
      <div className="bg-sa-navy-light w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl max-h-[85vh] flex flex-col animate-in slide-in-from-bottom sm:slide-in-from-bottom-0">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sa-navy-lighter">
          <h3 className="text-sa-text text-xl">Send Accusation</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-sa-navy-lighter flex items-center justify-center active:scale-95 transition-transform"
          >
            <X className="w-5 h-5 text-sa-text" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {/* Select Player */}
          <div>
            <label className="text-sa-text mb-3 block">Accuse Player</label>
            <div className="grid grid-cols-3 gap-3">
              {players.map((player) => (
                <button
                  key={player.id}
                  onClick={() => setSelectedPlayer(player.id)}
                  className={`p-3 rounded-xl border-2 transition-all active:scale-95 ${
                    selectedPlayer === player.id
                      ? "border-sa-yellow bg-sa-yellow/10"
                      : "border-sa-navy-lighter bg-sa-navy"
                  }`}
                >
                  <div className="text-center">
                    <span className="text-3xl mb-1 block">{player.emoji}</span>
                    <p className="text-sa-text text-xs truncate">{player.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Select Mission */}
          <div>
            <label className="text-sa-text mb-3 block">Suspected Mission</label>
            <div className="space-y-2">
              {missions.map((mission) => (
                <button
                  key={mission.id}
                  onClick={() => setSelectedMission(mission.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all active:scale-98 text-left ${
                    selectedMission === mission.id
                      ? "border-sa-yellow bg-sa-yellow/10"
                      : "border-sa-navy-lighter bg-sa-navy"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sa-text">{mission.title}</span>
                    {selectedMission === mission.id && (
                      <div className="w-5 h-5 rounded-full bg-sa-yellow flex items-center justify-center flex-shrink-0">
                        <span className="text-sa-navy text-xs">✓</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label className="text-sa-text mb-3 block">
              Message <span className="text-sa-text-muted">(Optional)</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Add a note about why you suspect this player..."
              className="w-full bg-sa-navy border border-sa-navy-lighter rounded-xl px-4 py-3 text-sa-text placeholder:text-sa-text-muted focus:outline-none focus:border-sa-yellow transition-colors resize-none h-24"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-sa-navy-lighter">
          <button
            onClick={handleSend}
            disabled={!canSend}
            className="w-full bg-sa-yellow text-sa-navy py-4 rounded-2xl transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            Send Accusation
          </button>
        </div>
      </div>
    </div>
  );
}
