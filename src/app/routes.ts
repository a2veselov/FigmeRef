import { createBrowserRouter } from "react-router";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { RulesScreen } from "./screens/RulesScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { GameSelectionScreen } from "./screens/GameSelectionScreen";
import { ActiveGameScreen } from "./screens/ActiveGameScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WelcomeScreen,
  },
  {
    path: "/rules",
    Component: RulesScreen,
  },
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/games",
    Component: GameSelectionScreen,
  },
  {
    path: "/game/:gameId",
    Component: ActiveGameScreen,
  },
]);
