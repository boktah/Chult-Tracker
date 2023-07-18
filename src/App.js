import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Calendar from './routes/Calendar';
import PartyBank from "./routes/PartyBank";
import CharacterManager from './routes/CharacterManager';
import EnterCode from "./routes/EnterCode";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/party-bank" element={<PartyBank />} />
        <Route path="/characters" element={<CharacterManager />} />
        <Route path="/enter-code" element={<EnterCode />} />
      </Routes>
    </div>
  );
}

export default App;
