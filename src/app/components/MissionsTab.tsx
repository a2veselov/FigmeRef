import { useState } from "react";
import { ChevronDown, ChevronUp, Target, Users, AlertTriangle, TrendingUp } from "lucide-react";
import { MissionCard } from "./MissionCard";
import { TargetPlayerPopup } from "./TargetPlayerPopup";
import { motion, AnimatePresence } from "motion/react";

export function MissionsTab() {
  const [showYourMissions, setShowYourMissions] = useState(true);
  const [showTargetingYou, setShowTargetingYou] = useState(false);
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  const yourMissions = [
    {
      id: "m1",
      title: "The Compliment Chain",
      description:
        "Get 3 different players to compliment each other within 5 minutes. You must initiate the first compliment.",
      points: 15,
      status: "active" as const,
    },
    {
      id: "m2",
      title: "Memory Master",
      description:
        "Convince someone to tell a fake memory that never happened and get at least one other person to believe it.",
      points: 20,
      status: "active" as const,
    },
    {
      id: "m3",
      title: "The Questioner",
      description:
        "Have a 2-minute conversation where you only ask questions. The other person must not notice.",
      points: 25,
      status: "active" as const,
    },
  ];

  const targetingYou = [
    {
      id: "t1",
      title: "Dance Move Copycat",
      description: "Unknown mission targeting you",
      status: "targeting" as const,
      targetedBy: "AntonM2",
    },
    {
      id: "t2",
      title: "Secret Handshake",
      description: "Unknown mission targeting you",
      status: "targeting" as const,
      targetedBy: "Secondary",
    },
  ];

  return (
    <div className="px-6 py-6 pb-24">
      {/* Game Status Card with modern design */}
      <motion.div
        className="bg-gradient-to-br from-sa-yellow via-[#f5d76c] to-sa-yellow rounded-3xl p-6 mb-6 shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Decorative animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-sa-navy" />
            <h3 className="text-sa-navy text-center font-bold text-lg">Game Status - Active</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl py-3 px-2">
              <p className="text-sa-navy text-3xl font-bold mb-1">3</p>
              <p className="text-sa-navy/70 text-xs font-semibold">Active Missions</p>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl py-3 px-2">
              <p className="text-sa-navy text-3xl font-bold mb-1">0</p>
              <p className="text-sa-navy/70 text-xs font-semibold">Failed Missions</p>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl py-3 px-2">
              <p className="text-sa-navy text-3xl font-bold mb-1">2</p>
              <p className="text-sa-navy/70 text-xs font-semibold">Against You</p>
            </div>
          </div>
          <div className="border-t-2 border-sa-navy/20 pt-4 text-center bg-white/10 backdrop-blur-sm rounded-2xl py-3">
            <p className="text-sa-navy text-2xl font-bold">
              Score: <span className="text-3xl">0</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Your Secret Missions */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <motion.button
          onClick={() => setShowYourMissions(!showYourMissions)}
          className="w-full bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-center justify-between mb-4 hover:bg-white/15 transition-all shadow-lg"
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 backdrop-blur-sm rounded-xl">
              <Target className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-sa-text text-lg font-semibold">Your Secret Missions</span>
            <span className="bg-sa-yellow/30 backdrop-blur-sm border border-sa-yellow/40 text-sa-yellow px-3 py-1.5 rounded-full text-sm font-bold">
              {yourMissions.length}
            </span>
          </div>
          <motion.div
            animate={{ rotate: showYourMissions ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-sa-text" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {showYourMissions && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {yourMissions.map((mission, index) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MissionCard
                    mission={mission}
                    onTarget={() => setSelectedMission(mission.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Missions Targeting You */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button
          onClick={() => setShowTargetingYou(!showTargetingYou)}
          className="w-full bg-gradient-to-br from-red-500/10 via-red-500/5 to-red-500/5 backdrop-blur-sm border border-red-400/30 rounded-2xl p-5 flex items-center justify-between mb-4 hover:bg-red-500/15 transition-all shadow-lg"
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/30 backdrop-blur-sm rounded-xl">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-sa-text text-lg font-semibold">Missions Targeting You</span>
            <span className="bg-red-500/30 backdrop-blur-sm border border-red-400/40 text-red-400 px-3 py-1.5 rounded-full text-sm font-bold">
              {targetingYou.length}
            </span>
          </div>
          <motion.div
            animate={{ rotate: showTargetingYou ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-sa-text" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {showTargetingYou && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {targetingYou.map((mission, index) => (
                <motion.div
                  key={mission.id}
                  className="bg-gradient-to-br from-red-500/10 via-red-500/5 to-red-500/5 backdrop-blur-sm border-2 border-red-400/30 rounded-2xl p-6 shadow-xl relative overflow-hidden group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Animated alert pulse */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                        <span className="text-red-400 text-sm font-semibold">⚠️ Targeting You</span>
                      </div>
                      <h4 className="text-sa-text text-lg font-semibold mb-2">
                        Someone is targeting you
                      </h4>
                      <p className="text-sa-text-muted leading-relaxed">
                        A player has selected you for their mission. Stay alert!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-red-400/20 bg-red-500/10 backdrop-blur-sm rounded-xl p-3">
                    <Users className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 text-sm font-semibold">
                      Targeted by: {mission.targetedBy}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Target Player Popup */}
      {selectedMission && (
        <TargetPlayerPopup onClose={() => setSelectedMission(null)} />
      )}
    </div>
  );
}