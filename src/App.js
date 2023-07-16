import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Calendar from './routes/Calendar';
import CharacterManager from './routes/CharacterManager';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/characters" element={<CharacterManager />} />
      </Routes>
    </div>
  );
}

export default App;
