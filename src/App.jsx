import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { SnackbarProvider } from 'notistack';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SmartCropPlanning from './pages/SmartCropPlanning';
import EquipmentManagement from './pages/EquipmentManagement';
import CommunityHub from './pages/CommunityHub';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import ProfessionalProfile from './pages/ProfessionalProfile';
import ProfessionalServices from './pages/ProfessionalServices';
import ProfessionalSchedule from './pages/ProfessionalSchedule';
import ProfessionalReviews from './pages/ProfessionalReviews';
import ProfessionalSettings from './pages/ProfessionalSettings';
import BloopersPage from './pages/BloopersPage';
import GleaningProgramsPage from './pages/GleaningProgramsPage';
import FarmDesignsPage from './pages/FarmDesignsPage';
import SeasonalEvents from './pages/SeasonalEvents';
import './App.css';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <UserProvider>
        <SnackbarProvider maxSnack={3}>
          <div className="app">
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/smart-crop-planning" element={<SmartCropPlanning />} />
                  <Route path="/seasonal-events" element={<SeasonalEvents />} />
                  <Route path="/equipment-management" element={<EquipmentManagement />} />
                  <Route path="/community-hub" element={<CommunityHub />} />
                  <Route path="/farm-designs" element={<FarmDesignsPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="/profile"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <PrivateRoute>
                        <Settings />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/professional/*"
                    element={
                      <PrivateRoute>
                        <Routes>
                          <Route path="/" element={<ProfessionalDashboard />} />
                          <Route path="profile" element={<ProfessionalProfile />} />
                          <Route path="services" element={<ProfessionalServices />} />
                          <Route path="schedule" element={<ProfessionalSchedule />} />
                          <Route path="reviews" element={<ProfessionalReviews />} />
                          <Route path="settings" element={<ProfessionalSettings />} />
                        </Routes>
                      </PrivateRoute>
                    }
                  />
                  <Route path="/bloopers" element={<BloopersPage />} />
                  <Route path="/gleaning-programs" element={<GleaningProgramsPage />} />
                </Routes>
              </main>
            </div>
          </div>
        </SnackbarProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
