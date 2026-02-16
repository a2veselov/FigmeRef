import { X, Trophy, Target, XCircle } from "lucide-react";

interface GameStatsPopupProps {
  gameId: string;
  onClose: () => void;
}

export function GameStatsPopup({ gameId, onClose }: GameStatsPopupProps) {
  const gameName = "Party Night"; // This would normally come from the gameId lookup
  
  const stats = {
    completedMissions: 8,
    failedMissions: 2,
    correctAccusations: 5,
    wrongAccusations: 1,
    totalPoints: 125,
    rank: 2,
    totalPlayers: 4,
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 animate-in fade-in">
      <div className="bg-sa-navy-light w-full max-w-md rounded-3xl border border-sa-navy-lighter overflow-hidden animate-in zoom-in-95">
        {/* Header */}
        <div className="bg-gradient-to-br from-sa-yellow/20 to-transparent p-6 border-b border-sa-navy-lighter">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-sa-text text-2xl mb-1">{gameName}</h3>
              <p className="text-sa-text-muted">Game Statistics</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-sa-navy-lighter flex items-center justify-center active:scale-95 transition-transform"
            >
              <X className="w-5 h-5 text-sa-text" />
            </button>
          </div>

          {/* Rank Badge */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-sa-yellow rounded-2xl flex items-center justify-center">
              <Trophy className="w-8 h-8 text-sa-navy" />
            </div>
            <div>
              <p className="text-sa-text-muted text-sm">Your Rank</p>
              <p className="text-sa-yellow text-3xl">
                #{stats.rank} <span className="text-sa-text text-base">/ {stats.totalPlayers}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-sa-navy rounded-xl p-4 border border-sa-navy-lighter">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-green-400" />
                <p className="text-sa-text-muted text-sm">Completed</p>
              </div>
              <p className="text-sa-text text-2xl">{stats.completedMissions}</p>
            </div>

            <div className="bg-sa-navy rounded-xl p-4 border border-sa-navy-lighter">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-400" />
                <p className="text-sa-text-muted text-sm">Failed</p>
              </div>
              <p className="text-sa-text text-2xl">{stats.failedMissions}</p>
            </div>

            <div className="bg-sa-navy rounded-xl p-4 border border-sa-navy-lighter">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400">✓</span>
                <p className="text-sa-text-muted text-sm">Correct</p>
              </div>
              <p className="text-sa-text text-2xl">{stats.correctAccusations}</p>
            </div>

            <div className="bg-sa-navy rounded-xl p-4 border border-sa-navy-lighter">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-400">✗</span>
                <p className="text-sa-text-muted text-sm">Wrong</p>
              </div>
              <p className="text-sa-text text-2xl">{stats.wrongAccusations}</p>
            </div>
          </div>

          {/* Total Points */}
          <div className="bg-gradient-to-br from-sa-yellow/20 to-sa-yellow/5 rounded-2xl p-5 border border-sa-yellow/30 mb-6">
            <p className="text-sa-text-muted text-center mb-1">Total Points</p>
            <p className="text-sa-yellow text-4xl text-center">{stats.totalPoints}</p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-sa-yellow text-sa-navy py-3 rounded-2xl transition-all active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}