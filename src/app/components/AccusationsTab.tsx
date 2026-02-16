import { useState } from "react";
import { Send, AlertTriangle } from "lucide-react";
import { SendAccusationPopup } from "./SendAccusationPopup";

export function AccusationsTab() {
  const [showAccusationPopup, setShowAccusationPopup] = useState(false);

  const accusations = [
    {
      id: "a1",
      accuser: "You",
      accused: "AntonM2",
      mission: "The Compliment Chain",
      status: "pending" as const,
      timestamp: "2:45 PM",
    },
    {
      id: "a2",
      accuser: "Secondary",
      accused: "You",
      mission: "Memory Master",
      status: "rejected" as const,
      timestamp: "2:30 PM",
    },
    {
      id: "a3",
      accuser: "You",
      accused: "Secondary",
      mission: "The Questioner",
      status: "confirmed" as const,
      timestamp: "2:15 PM",
      points: 10,
    },
  ];

  return (
    <div className="px-6 py-6 pb-24">
      {/* Info Card */}
      <div className="bg-gradient-to-br from-sa-blue/20 to-sa-blue/5 border border-sa-blue/30 rounded-2xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-sa-blue flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-sa-text mb-2">About Accusations</h3>
            <p className="text-sa-text-muted text-sm">
              If you suspect someone is on a mission, send them an accusation. If
              you're correct, you earn points! But be careful - wrong accusations
              might cost you.
            </p>
          </div>
        </div>
      </div>

      {/* Send Accusation Button */}
      <button
        onClick={() => setShowAccusationPopup(true)}
        className="w-full bg-sa-yellow text-sa-navy py-4 rounded-2xl flex items-center justify-center gap-2 mb-6 active:scale-95 transition-transform"
      >
        <Send className="w-5 h-5" />
        Send Accusation
      </button>

      {/* Accusations History */}
      <div>
        <h3 className="text-sa-text text-lg mb-4">Accusation History</h3>
        <div className="space-y-4">
          {accusations.map((accusation) => (
            <div
              key={accusation.id}
              className={`bg-sa-navy-light border rounded-2xl p-5 ${
                accusation.status === "confirmed"
                  ? "border-green-500/30"
                  : accusation.status === "rejected"
                  ? "border-red-500/30"
                  : "border-sa-navy-lighter"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sa-text">
                      {accusation.accuser === "You" ? "You" : accusation.accuser}
                    </span>
                    <span className="text-sa-text-muted">→</span>
                    <span className="text-sa-text">
                      {accusation.accused === "You" ? "You" : accusation.accused}
                    </span>
                  </div>
                  <p className="text-sa-text-muted text-sm mb-1">
                    Mission: {accusation.mission}
                  </p>
                  <p className="text-sa-text-muted text-xs">{accusation.timestamp}</p>
                </div>
                <div>
                  {accusation.status === "pending" && (
                    <span className="bg-sa-blue/20 text-sa-blue px-3 py-1 rounded-full text-sm">
                      Pending
                    </span>
                  )}
                  {accusation.status === "confirmed" && (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      ✓ Correct
                    </span>
                  )}
                  {accusation.status === "rejected" && (
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                      ✗ Wrong
                    </span>
                  )}
                </div>
              </div>

              {accusation.points && (
                <div className="border-t border-sa-navy-lighter pt-3 mt-3">
                  <p className="text-green-400 text-sm">
                    +{accusation.points} points earned
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Send Accusation Popup */}
      {showAccusationPopup && (
        <SendAccusationPopup onClose={() => setShowAccusationPopup(false)} />
      )}
    </div>
  );
}
