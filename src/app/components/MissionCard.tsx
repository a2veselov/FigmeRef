import { Target, Trophy, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "motion/react";

interface Mission {
  id: string;
  title: string;
  description: string;
  points?: number;
  status: "active" | "completed" | "failed" | "targeting";
}

interface MissionCardProps {
  mission: Mission;
  onTarget?: () => void;
}

export function MissionCard({ mission, onTarget }: MissionCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sa-yellow/5 via-transparent to-sa-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h4 className="text-sa-text text-lg font-semibold mb-2 leading-snug">{mission.title}</h4>
            <p className="text-sa-text-muted leading-relaxed">{mission.description}</p>
          </div>
          {mission.points && (
            <motion.div
              className="flex-shrink-0 ml-3 bg-gradient-to-br from-sa-yellow/30 via-sa-yellow/20 to-sa-yellow/10 backdrop-blur-sm border border-sa-yellow/40 rounded-xl px-3 py-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-sa-yellow" />
                <span className="text-sa-yellow font-bold text-sm">{mission.points}</span>
              </div>
            </motion.div>
          )}
        </div>

        {onTarget && (
          <motion.button
            onClick={onTarget}
            className="w-full bg-gradient-to-r from-sa-yellow via-[#f5d76c] to-sa-yellow text-sa-navy py-3.5 rounded-xl mt-4 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-sa-yellow/30 relative overflow-hidden"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            <Target className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Target Player</span>
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
        )}

        {mission.status === "completed" && (
          <motion.div
            className="mt-4 bg-gradient-to-r from-green-500/20 via-green-400/20 to-green-500/20 backdrop-blur-sm border border-green-400/40 rounded-xl px-4 py-3 flex items-center justify-center gap-2 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Mission Completed</span>
          </motion.div>
        )}

        {mission.status === "failed" && (
          <motion.div
            className="mt-4 bg-gradient-to-r from-red-500/20 via-red-400/20 to-red-500/20 backdrop-blur-sm border border-red-400/40 rounded-xl px-4 py-3 flex items-center justify-center gap-2 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <XCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-semibold">Mission Failed</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}