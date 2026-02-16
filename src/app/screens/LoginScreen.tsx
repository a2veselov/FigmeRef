import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";

export function LoginScreen() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Mock login - navigate to games screen
    if (username) {
      navigate("/games");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sa-navy via-sa-navy to-[#0f1823] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 -right-20 w-72 h-72 bg-sa-yellow/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="px-6 py-4 flex items-center gap-4 relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <motion.button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-sa-text" />
        </motion.button>
        <h2 className="text-sa-text text-xl font-semibold">Login</h2>
      </motion.div>

      <div className="px-6 py-12 flex flex-col items-center relative z-10">
        {/* Logo with glow effect */}
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-sa-yellow via-[#f5d76c] to-sa-yellow rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-sa-yellow/40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-5xl">🕵️</span>
        </motion.div>

        <motion.h1
          className="text-sa-text text-2xl mb-2 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to <span className="text-sa-yellow">Secret Agenda</span>
        </motion.h1>
        <motion.p
          className="text-sa-text-muted mb-12 text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Login to continue your secret missions
        </motion.p>

        {/* Login Form */}
        <motion.div
          className="w-full max-w-md space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div>
            <label className="text-sa-text mb-2 block font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 text-sa-text placeholder:text-sa-text-muted/50 focus:outline-none focus:border-sa-yellow focus:ring-2 focus:ring-sa-yellow/20 transition-all"
            />
          </div>

          <div>
            <label className="text-sa-text mb-2 block font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 text-sa-text placeholder:text-sa-text-muted/50 focus:outline-none focus:border-sa-yellow focus:ring-2 focus:ring-sa-yellow/20 transition-all pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-sa-text-muted hover:text-sa-text transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <motion.button
            onClick={handleLogin}
            disabled={!username}
            className="w-full bg-gradient-to-r from-sa-yellow via-[#f5d76c] to-sa-yellow text-sa-navy py-4 rounded-2xl mt-8 font-semibold shadow-lg shadow-sa-yellow/30 disabled:opacity-50 disabled:shadow-none relative overflow-hidden"
            whileTap={{ scale: username ? 0.97 : 1 }}
            whileHover={{ scale: username ? 1.02 : 1 }}
          >
            <span className="relative z-10">Login</span>
            {username && (
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
            )}
          </motion.button>

          <motion.button
            onClick={() => navigate("/rules")}
            className="w-full bg-transparent border-2 border-white/10 backdrop-blur-sm text-sa-text py-4 rounded-2xl font-medium hover:bg-white/5 hover:border-white/20 transition-all"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            View Rules
          </motion.button>

          <div className="text-center pt-4">
            <p className="text-sa-text-muted">
              Don't have an account?{" "}
              <span className="text-sa-yellow cursor-pointer hover:underline font-medium">Sign up</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}