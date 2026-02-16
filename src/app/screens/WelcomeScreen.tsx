import { useNavigate } from "react-router";
import { motion } from "motion/react";
import logoImg from "figma:asset/540e37fd329b655ba43400ec14c2b00d1b0a5892.png";

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sa-navy via-sa-navy to-[#0f1823] flex flex-col items-center justify-between p-6 pb-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-64 h-64 bg-sa-yellow/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-sa-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
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
        className="w-full flex items-center gap-3 pt-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-14 h-14 bg-gradient-to-br from-sa-yellow via-sa-yellow to-[#e0b63c] rounded-2xl flex items-center justify-center shadow-lg shadow-sa-yellow/20">
          <span className="text-3xl">🕵️</span>
        </div>
        <h1 className="text-sa-text text-2xl">
          Secret<span className="text-sa-yellow">Agenda</span>
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md relative z-10">
        {/* Hero Card with glassmorphism */}
        <motion.div
          className="w-full bg-gradient-to-br from-sa-navy-light/80 via-sa-navy-light/60 to-sa-navy-light/40 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center mb-6 relative">
            <motion.div
              className="w-28 h-28 bg-gradient-to-br from-sa-yellow via-[#f5d76c] to-sa-yellow rounded-3xl flex items-center justify-center relative shadow-xl shadow-sa-yellow/30"
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(245, 201, 76, 0.3)",
                  "0 20px 80px rgba(245, 201, 76, 0.5)",
                  "0 20px 60px rgba(245, 201, 76, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-6xl">🕵️</span>
              {/* Decorative animated dots */}
              <motion.div
                className="absolute -left-8 top-8 w-12 h-12 bg-gradient-to-br from-sa-blue/40 to-sa-blue/20 rounded-full backdrop-blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -right-8 bottom-6 w-8 h-8 bg-gradient-to-br from-sa-yellow/40 to-sa-yellow/20 rounded-full backdrop-blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>
          <h2 className="text-sa-text text-center text-2xl mb-2 font-semibold bg-gradient-to-r from-white via-white to-sa-yellow bg-clip-text text-transparent">
            Secret Agenda
          </h2>
          <p className="text-sa-text-muted text-center">The Ultimate Party Game</p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sa-text text-xl mb-2 leading-relaxed">
            Trick your friends.
            <br />
            Complete secret tasks.
          </p>
          <p className="text-sa-yellow text-xl font-medium">
            Complete your secret agenda.
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sa-text-muted text-center mb-8 px-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          The ultimate party game for groups. Create secret missions, complete challenges, and have fun!
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div
        className="w-full max-w-md space-y-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button
          onClick={() => navigate("/rules")}
          className="w-full bg-gradient-to-r from-sa-yellow via-[#f5d76c] to-sa-yellow text-sa-navy py-4 rounded-2xl font-semibold shadow-lg shadow-sa-yellow/30 relative overflow-hidden"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="relative z-10">How to Play</span>
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
        <motion.button
          onClick={() => navigate("/login")}
          className="w-full bg-transparent border-2 border-sa-yellow/50 backdrop-blur-sm text-sa-yellow py-4 rounded-2xl font-semibold hover:bg-sa-yellow/10 transition-all shadow-lg shadow-sa-yellow/10"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02, borderColor: "rgba(245, 201, 76, 1)" }}
        >
          Login
        </motion.button>
      </motion.div>
    </div>
  );
}