import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { SnackbarProvider } from 'notistack';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SmartCropPlanning from './pages/SmartCropPlanning';
import EquipmentManagement from './pages/EquipmentManagement';
import CommunityHub from './pages/CommunityHub';
import BloopersPage from './pages/BloopersPage';
import GleaningProgramsPage from './pages/GleaningProgramsPage';
import FarmDesignsPage from './pages/FarmDesignsPage';
import SeasonalEvents from './pages/SeasonalEvents';
import './App.css';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Route path="/login" />;
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
                  <Route path="/smart-crop-planning" element={<SmartCropPlanning />} />
                  <Route path="/seasonal-events" element={<SeasonalEvents />} />
                  <Route path="/equipment-management" element={<EquipmentManagement />} />
                  <Route path="/community-hub" element={<CommunityHub />} />
                  <Route path="/farm-designs" element={<FarmDesignsPage />} />
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
