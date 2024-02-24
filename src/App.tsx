import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Discordtailwind from "./screens/discord-tailwind/Discordtailwind";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discord" element={<Discordtailwind />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
