import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { SnackbarProvider } from 'notistack';
import Navbar from './components/Navigation/Navbar';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Home from './pages/Home';
import BeginnerDashboard from './pages/BeginnerDashboard';
import Weather from './pages/Weather';
import MarketPrices from './pages/MarketPrices';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import StoreLocations from './pages/StoreLocations';
import AuthService from './services/AuthService';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import './App.css';

const PrivateRoute = ({ children }) => {
  const user = AuthService.getCurrentUser();
  return user ? children : <Navigate to="/signin" />;
};

function App() {
  return (
    <UserProvider>
      <SnackbarProvider maxSnack={3}>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/market" element={<MarketPrices />} />
                <Route path="/beginner/*" element={<BeginnerDashboard />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/demo" element={<Demo />} />
                <Route
                  path="/professional/*"
                  element={
                    <PrivateRoute>
                      <ProfessionalDashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/store-locations"
                  element={
                    <PrivateRoute>
                      <StoreLocations />
                    </PrivateRoute>
                  }
                />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
          </div>
        </Router>
      </SnackbarProvider>
    </UserProvider>
  );
}

export default App;
