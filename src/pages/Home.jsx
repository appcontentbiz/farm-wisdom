import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();
  const { setUserRole } = useUser();

  const selectRole = (role) => {
    setUserRole(role);
    navigate(role === 'beginner' ? '/beginner' : '/professional');
  };

  return (
    <div className="home">
      <h1>Welcome to FarmWisdom</h1>
      <p className="subtitle">Your journey to successful farming starts here</p>
      
      <div className="role-buttons">
        <button onClick={() => selectRole('beginner')} className="role-button beginner">
          <h2>Beginner Farmer</h2>
          <p>Learn farming basics, get started with simple guides</p>
          <ul className="feature-list">
            <li>Step-by-step farming guides</li>
            <li>Basic farming techniques</li>
            <li>Community support</li>
            <li>Essential tools guide</li>
          </ul>
        </button>

        <button onClick={() => selectRole('professional')} className="role-button professional">
          <h2>Professional Farmer</h2>
          <p>Access advanced tools and management features</p>
          <ul className="feature-list">
            <li>Advanced crop management</li>
            <li>Livestock tracking</li>
            <li>Market analysis</li>
            <li>Resource optimization</li>
          </ul>
        </button>
      </div>
    </div>
  );
}
