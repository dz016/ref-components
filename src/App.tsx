import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Discordtailwind from "./screens/discord-tailwind/Discordtailwind";
import Navbar from "./screens/navbar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discord" element={<Discordtailwind />} />
          <Route path="/res-navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
