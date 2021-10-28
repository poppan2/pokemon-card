import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="App-header">
      <div>
        <Link to="/pokedex">Pokedex</Link>
        <div>
          <img src="/images/Pokemon-logo.jpg" />
        </div>
        <Link to="/team">My Team</Link>
      </div>
    </header>
  );
};

export default Header;
