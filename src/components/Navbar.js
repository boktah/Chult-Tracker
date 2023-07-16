import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Calendar</Link>
      <Link to="/characters">Character Manager</Link>
    </div>
  );
}

export default Navbar;
