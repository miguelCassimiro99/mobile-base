import "./src/styles/global";

import { Home } from "./src/app/Home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}
