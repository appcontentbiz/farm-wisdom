import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import BeginnerDashboard from './pages/BeginnerDashboard';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import WeatherDashboard from './pages/WeatherDashboard';
import StoreLocations from './components/StoreLocations/StoreLocations';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/beginner/*" element={<BeginnerDashboard />} />
              <Route path="/professional/*" element={<ProfessionalDashboard />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/weather" element={<WeatherDashboard />} />
              <Route path="/store-locations" element={<StoreLocations />} />
              <Route path="/market" element={<div>Market Prices (Coming Soon)</div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
