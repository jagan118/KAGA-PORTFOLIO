import { KageLandingPage } from "./shaders/landing-pages/LandingPages";
import "./shaders/landing-pages/threeui.css";

export function App() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <KageLandingPage />
    </main>
  );
}

export default App;
