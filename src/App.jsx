import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navigation/Navbar';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Home from './pages/Home';
import BeginnerDashboard from './pages/BeginnerDashboard';
import WeatherDashboard from './pages/WeatherDashboard';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import AuthService from './services/AuthService';
import './App.css';

const PrivateRoute = ({ children }) => {
  const user = AuthService.getCurrentUser();
  return user ? children : <Navigate to="/signin" />;
};

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/beginner/*"
                element={
                  <PrivateRoute>
                    <BeginnerDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/weather"
                element={
                  <PrivateRoute>
                    <WeatherDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/professional/*"
                element={
                  <PrivateRoute>
                    <ProfessionalDashboard />
                  </PrivateRoute>
                }
              />
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
