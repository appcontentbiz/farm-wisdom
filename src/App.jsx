import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { SnackbarProvider } from 'notistack';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BeginnerGuide from './pages/BeginnerGuide';
import Resources from './pages/Resources';
import StateResourcesPage from './pages/StateResourcesPage';
import BloopersPage from './pages/BloopersPage';
import GleaningProgramsPage from './pages/GleaningProgramsPage';
import BeginnerFarmerPage from './pages/BeginnerFarmerPage';
import SmartCropPlanning from './pages/SmartCropPlanning';
import PrecisionWeather from './pages/PrecisionWeather';
import MarketIntelligence from './pages/MarketIntelligence';
import ResourceOptimization from './pages/ResourceOptimization';
import EquipmentManagement from './pages/EquipmentManagement';
import CommunityHub from './pages/CommunityHub';
import FarmDesignsPage from './pages/FarmDesignsPage';
import Demo from './pages/Demo';
import ResourceDirectory from './pages/ResourceDirectory';
import Weather from './pages/Weather';
import MarketPrices from './pages/MarketPrices';
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
                  <Route path="/beginner-guide" element={<BeginnerGuide />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/state-resources" element={<StateResourcesPage />} />
                  <Route path="/bloopers" element={<BloopersPage />} />
                  <Route path="/gleaning-programs" element={<GleaningProgramsPage />} />
                  <Route path="/beginner-farmer" element={<BeginnerFarmerPage />} />
                  <Route path="/smart-crop-planning" element={<SmartCropPlanning />} />
                  <Route path="/precision-weather" element={<PrecisionWeather />} />
                  <Route path="/market-intelligence" element={<MarketIntelligence />} />
                  <Route path="/resource-optimization" element={<ResourceOptimization />} />
                  <Route path="/equipment-management" element={<EquipmentManagement />} />
                  <Route path="/community-hub" element={<CommunityHub />} />
                  <Route path="/farm-designs" element={<FarmDesignsPage />} />
                  <Route path="/try-demo" element={<Demo />} />
                  <Route path="/resource-directory" element={<ResourceDirectory />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/market-prices" element={<MarketPrices />} />
                  <Route path="/seasonal-events" element={<SeasonalEvents />} />
                  <Route path="/upgrade" element={<Demo />} />
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
