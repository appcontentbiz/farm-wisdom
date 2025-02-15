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
import PricingPlans from './components/Pricing/PricingPlans';
import Checkout from './pages/Checkout';
import Demo from './pages/Demo';
import InteractiveDemo from './pages/InteractiveDemo';
import BeginnerFarmerPage from './pages/BeginnerFarmerPage';
import Resources from './pages/Resources';
import SmartCropPlanning from './pages/SmartCropPlanning';
import PrecisionWeather from './pages/PrecisionWeather';
import MarketIntelligence from './pages/MarketIntelligence';
import ResourceOptimization from './pages/ResourceOptimization';
import EquipmentManagement from './pages/EquipmentManagement';
import CommunityHub from './pages/CommunityHub';
import ResourceDirectory from './pages/ResourceDirectory';
import StateResourcesPage from './pages/StateResourcesPage';
import BloopersPage from './pages/BloopersPage';
import GleaningProgramsPage from './pages/GleaningProgramsPage';
import FarmDesignsPage from './pages/FarmDesignsPage';
import SeasonalEvents from './pages/SeasonalEvents';
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
                <Route path="/pricing" element={<PricingPlans />} />
                <Route path="/checkout/:plan" element={<Checkout />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/try-enterprise" element={<InteractiveDemo />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/resource-directory" element={<ResourceDirectory />} />
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
                <Route path="/seasonal-events" element={<SeasonalEvents />} />
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
              </Routes>
            </main>
          </div>
        </Router>
      </SnackbarProvider>
    </UserProvider>
  );
}

export default App;
