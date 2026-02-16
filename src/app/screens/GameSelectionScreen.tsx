import { useState } from "react";
import { useNavigate } from "react-router";
import { LogIn, Plus, ChevronDown, User, Settings, LogOut, ExternalLink, Sparkles } from "lucide-react";
import { GameStatsPopup } from "../components/GameStatsPopup";
import { motion, AnimatePresence } from "motion/react";

export function GameSelectionScreen() {
  const navigate = useNavigate();
  const [showFinished, setShowFinished] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [selectedGameStats, setSelectedGameStats] = useState<string | null>(null);

  const activeGames = [
    {
      id: "test1",
      name: "Test",
      players: ["😊", "🔥"],
      created: "10/1/2025",
      progress: 50,
    },
  ];

  const finishedGames = [
    {
      id: "finished1",
      name: "Party Night",
      players: ["😊", "🔥", "🎭"],
      created: "9/28/2025",
      winner: "Player1",
    },
    {
      id: "finished2",
      name: "Weekend Fun",
      players: ["😊", "🔥"],
      created: "9/25/2025",
      winner: "Player2",
    },
    {
      id: "finished3",
      name: "Office Game",
      players: ["😊", "🔥", "🎭", "🎪"],
      created: "9/20/2025",
      winner: "Player3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sa-navy via-sa-navy to-[#0f1823] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-sa-yellow/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-sa-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="px-6 py-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <motion.p
              className="text-sa-yellow text-sm font-medium flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              Welcome Back!
            </motion.p>
            <motion.h1
              className="text-sa-text text-2xl font-semibold mt-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              a2veselov+test1
            </motion.h1>
          </div>
          <motion.button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="w-14 h-14 bg-gradient-to-br from-sa-yellow via-[#f5d76c] to-sa-yellow rounded-2xl flex items-center justify-center shadow-lg shadow-sa-yellow/30 relative"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl">😊</span>
          </motion.button>
        </div>

        {/* User Menu Dropdown */}
        <AnimatePresence>
          {showUserMenu && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowUserMenu(false)}
              />
              <motion.div
                className="absolute right-6 top-24 bg-sa-navy-light/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-20 min-w-52"
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ type: "spring", duration: 0.3 }}
              >
                <button className="w-full px-5 py-3.5 text-sa-text flex items-center gap-3 hover:bg-white/5 active:bg-white/10 transition-colors">
                  <User className="w-5 h-5" />
                  <span className="font-medium">Profile</span>
                </button>
                <button className="w-full px-5 py-3.5 text-sa-text flex items-center gap-3 hover:bg-white/5 active:bg-white/10 transition-colors">
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Settings</span>
                </button>
                <div className="border-t border-white/10"></div>
                <button
                  onClick={() => navigate("/")}
                  className="w-full px-5 py-3.5 text-red-400 flex items-center gap-3 hover:bg-red-500/10 active:bg-red-500/20 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="bg-transparent border-2 border-sa-yellow/50 backdrop-blur-sm text-sa-yellow py-3.5 rounded-2xl flex items-center justify-center gap-2 font-semibold shadow-lg shadow-sa-yellow/10 hover:border-sa-yellow hover:bg-sa-yellow/5 transition-all"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            <LogIn className="w-5 h-5" />
            Join Game
          </motion.button>
          <motion.button
            className="bg-gradient-to-r from-sa-yellow via-[#f5d76c] to-sa-yellow text-sa-navy py-3.5 rounded-2xl flex items-center justify-center gap-2 font-semibold shadow-lg shadow-sa-yellow/30 relative overflow-hidden"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            <Plus className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Create Game</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="px-6 pb-24 relative z-10">
        {/* Active Games */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-sa-text text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-gradient-to-b from-sa-yellow to-sa-yellow/50 rounded-full"></span>
            Active Games
          </h2>
          <div className="space-y-4">
            {activeGames.map((game, index) => (
              <motion.button
                key={game.id}
                onClick={() => navigate(`/game/${game.id}`)}
                className="w-full bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl p-6 text-left relative overflow-hidden shadow-xl group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sa-yellow/10 via-transparent to-sa-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <h3 className="text-sa-navy text-2xl font-bold mb-2 flex items-center gap-2">
                      {game.name}
                      <motion.span
                        className="inline-block w-2 h-2 bg-green-500 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sa-navy/60 text-sm font-medium">Team members</span>
                      <div className="flex -space-x-1">
                        {game.players.map((emoji, idx) => (
                          <div
                            key={idx}
                            className="w-8 h-8 bg-gradient-to-br from-sa-yellow/30 to-sa-yellow/10 rounded-full flex items-center justify-center border-2 border-white"
                          >
                            <span className="text-lg">{emoji}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-sa-navy/50 text-sm">Created {game.created}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-20 h-20">
                      <svg className="w-20 h-20 -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          stroke="#e5e5e5"
                          strokeWidth="6"
                          fill="none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          stroke="url(#progressGradient)"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 34}`}
                          strokeDashoffset={`${2 * Math.PI * 34 * (1 - game.progress / 100)}`}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F5C94C" />
                            <stop offset="100%" stopColor="#5B9FED" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sa-navy text-base font-bold">{game.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 right-6 z-10">
                  <ExternalLink className="w-5 h-5 text-sa-navy/30 group-hover:text-sa-navy/60 transition-colors" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Finished Games */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            onClick={() => setShowFinished(!showFinished)}
            className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-center justify-between mb-4 hover:bg-white/10 transition-all"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-sa-text-muted to-sa-text-muted/50 rounded-full"></span>
              <h2 className="text-sa-text text-xl font-semibold">Finished Games</h2>
              <span className="bg-white/10 backdrop-blur-sm text-sa-text px-3 py-1.5 rounded-full text-sm font-semibold">
                {finishedGames.length}
              </span>
            </div>
            <motion.div
              animate={{ rotate: showFinished ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-sa-text" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {showFinished && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {finishedGames.map((game, index) => (
                  <motion.button
                    key={game.id}
                    onClick={() => setSelectedGameStats(game.id)}
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-left hover:bg-white/10 hover:border-white/20 transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="text-sa-text text-lg font-semibold mb-2 group-hover:text-sa-yellow transition-colors">
                      {game.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sa-text-muted text-sm">Players:</span>
                      <div className="flex gap-1">
                        {game.players.map((emoji, idx) => (
                          <span key={idx} className="text-base">
                            {emoji}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sa-text-muted text-sm mb-2">
                      Created {game.created}
                    </p>
                    <div className="flex items-center gap-2 bg-sa-yellow/20 backdrop-blur-sm border border-sa-yellow/30 rounded-lg px-3 py-2 w-fit">
                      <Sparkles className="w-4 h-4 text-sa-yellow" />
                      <p className="text-sa-yellow text-sm font-semibold">Winner: {game.winner}</p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Game Stats Popup */}
      {selectedGameStats && (
        <GameStatsPopup
          gameId={selectedGameStats}
          onClose={() => setSelectedGameStats(null)}
        />
      )}
    </div>
  );
}