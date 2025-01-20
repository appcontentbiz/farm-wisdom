import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import '../../styles/Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const { userRole } = useUser();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-brand">FarmWisdom</Link>
        <div className="nav-links">
          <Link to="/beginner">Beginner Guide</Link>
          <Link to="/demo" className="nav-button demo">Try Demo</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/market">Market Prices</Link>
        </div>
      </div>
      <div className="nav-right">
        <Link to="/pricing" className="nav-button upgrade">Upgrade</Link>
        {!userRole && (
          <>
            <Link to="/signin" className="nav-button signin">Sign In</Link>
            <Link to="/signup" className="nav-button signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
