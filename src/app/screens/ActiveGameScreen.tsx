import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Target, MessageCircle, Users } from "lucide-react";
import { MissionsTab } from "../components/MissionsTab";
import { AccusationsTab } from "../components/AccusationsTab";
import { LobbyTab } from "../components/LobbyTab";
import { motion } from "motion/react";

type Tab = "missions" | "accusations" | "lobby";

export function ActiveGameScreen() {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [activeTab, setActiveTab] = useState<Tab>("missions");
  const [lobbyUnread, setLobbyUnread] = useState(6);

  const tabConfig = [
    { id: "missions" as Tab, label: "Missions", icon: Target },
    { id: "accusations" as Tab, label: "Accusations", icon: MessageCircle },
    { id: "lobby" as Tab, label: "Lobby", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sa-navy via-sa-navy to-[#0f1823] flex flex-col relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-0 w-80 h-80 bg-sa-yellow/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header with glassmorphism */}
      <motion.div
        className="px-6 py-4 flex items-center justify-center relative bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.button
          onClick={() => navigate("/games")}
          className="absolute left-6 p-2 -ml-2 rounded-xl hover:bg-white/10 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-sa-text" />
        </motion.button>
        <h2 className="text-sa-text text-xl font-semibold">Test</h2>
      </motion.div>

      {/* Modern Tab Bar */}
      <motion.div
        className="px-4 pt-5 pb-2 relative z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1.5 flex gap-1.5 shadow-lg">
          {tabConfig.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            const unread = id === "lobby" ? lobbyUnread : 0;
            
            return (
              <motion.button
                key={id}
                onClick={() => {
                  setActiveTab(id);
                  if (id === "lobby") setLobbyUnread(0);
                }}
                className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all relative flex items-center justify-center gap-2 ${
                  isActive
                    ? id === "lobby"
                      ? "bg-gradient-to-r from-sa-blue to-[#4a8dd8] text-white shadow-lg"
                      : "bg-gradient-to-r from-sa-yellow via-[#f5d76c] to-sa-yellow text-sa-navy shadow-lg shadow-sa-yellow/30"
                    : "text-sa-text-muted hover:bg-white/5"
                }`}
                whileTap={{ scale: 0.97 }}
                layout
              >
                <Icon className={`w-4 h-4 ${isActive ? "" : "opacity-70"}`} />
                <span className="text-sm">{label}</span>
                {unread > 0 && activeTab !== "lobby" && (
                  <motion.span
                    className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {unread}
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Tab Content with animations */}
      <div className="flex-1 overflow-auto relative z-10">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "missions" && <MissionsTab />}
          {activeTab === "accusations" && <AccusationsTab />}
          {activeTab === "lobby" && <LobbyTab />}
        </motion.div>
      </div>
    </div>
  );
}