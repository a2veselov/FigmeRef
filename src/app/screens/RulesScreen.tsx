import { useNavigate } from "react-router";
import { ChevronLeft, Lightbulb, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function RulesScreen() {
  const navigate = useNavigate();

  const rules = [
    {
      number: 1,
      title: "Create or Join a Game",
      description:
        "One player creates a game and shares the join code. Everyone else joins using the code. You need at least 3 players to start.",
    },
    {
      number: 2,
      title: "Get Your Secret Mission",
      description:
        "Each player receives a secret mission to complete during the game. Your goal is to complete your mission without anyone noticing.",
    },
    {
      number: 3,
      title: "Complete Your Mission",
      description:
        "Act naturally while completing your secret task. Missions might involve getting someone to say a specific word, performing an action, or achieving a goal.",
    },
    {
      number: 4,
      title: "Watch and Accuse",
      description:
        "Stay alert and watch for suspicious behavior from other players. If you suspect someone is on a mission, you can send an accusation letter.",
    },
    {
      number: 5,
      title: "Win the Game",
      description:
        "The game ends when all missions are either completed or failed whichever comes first. The winner is the player with the most points at that time.",
    },
  ];

  const tips = [
    "Be subtle – the best missions are completed without anyone suspecting",
    "Stay alert and watch for suspicious behavior from other players",
    "Don't hesitate to call out missions - catching others earns you points!",
    "If caught, accept it gracefully and move on to your next mission",
    "Have fun and embrace the chaos!",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sa-navy via-sa-navy to-[#0f1823] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-0 w-80 h-80 bg-sa-yellow/5 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-20 right-0 w-96 h-96 bg-sa-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="sticky top-0 bg-white/5 backdrop-blur-md z-10 border-b border-white/10 shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="px-6 py-4 flex items-center gap-4">
          <motion.button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-xl hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-sa-text" />
          </motion.button>
          <h2 className="text-sa-text text-xl font-semibold">How to Play</h2>
        </div>
      </motion.div>

      <div className="px-6 py-6 pb-24 relative z-10">
        {/* Rules */}
        <div className="space-y-4 mb-8">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.number}
              className="bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex gap-4">
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sa-yellow via-[#f5d76c] to-sa-yellow rounded-full flex items-center justify-center shadow-lg shadow-sa-yellow/30"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-sa-navy text-xl font-bold">{rule.number}</span>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-sa-text text-lg font-semibold mb-2 group-hover:text-sa-yellow transition-colors">
                    {rule.title}
                  </h3>
                  <p className="text-sa-text-muted leading-relaxed">{rule.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tie Breaker */}
        <motion.div
          className="bg-gradient-to-br from-sa-blue/20 via-sa-blue/10 to-sa-blue/5 backdrop-blur-sm rounded-2xl p-6 border border-sa-blue/30 mb-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-start gap-3 mb-3">
            <CheckCircle2 className="w-6 h-6 text-sa-blue mt-0.5 flex-shrink-0" />
            <p className="text-sa-text-muted leading-relaxed">
              The game ends when all missions are either completed or failed
              whichever comes first. The winner is the player with the most points
              at that time.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mt-4 border border-white/10">
            <p className="text-sa-text leading-relaxed">
              <span className="text-sa-yellow font-semibold">Tie-breaker:</span> If multiple
              players have the same number of points, the winner is determined by
              who completed their last mission faster (based on the timestamp of
              their final mission completion).
            </p>
          </div>
        </motion.div>

        {/* Pro Tips */}
        <motion.div
          className="bg-gradient-to-br from-sa-yellow/20 via-sa-yellow/10 to-sa-yellow/5 backdrop-blur-sm rounded-2xl p-6 border border-sa-yellow/30 shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-sa-yellow/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-sa-yellow/30 backdrop-blur-sm rounded-xl">
                <Lightbulb className="w-5 h-5 text-sa-yellow" />
              </div>
              <h3 className="text-sa-yellow text-lg font-bold">Pro Tips</h3>
            </div>
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <motion.li
                  key={index}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="text-sa-yellow flex-shrink-0 text-lg">•</span>
                  <span className="text-sa-text leading-relaxed">{tip}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Ready Button */}
        <motion.button
          onClick={() => navigate("/login")}
          className="w-full bg-gradient-to-r from-sa-yellow via-[#f5d76c] to-sa-yellow text-sa-navy py-4 rounded-2xl mt-8 font-semibold shadow-lg shadow-sa-yellow/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="relative z-10">Ready to Play!</span>
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
      </div>
    </div>
  );
}