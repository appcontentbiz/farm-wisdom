import { useState } from 'react';
import LivestockManagement from './LivestockManagement';
import PoultryManagement from './PoultryManagement';
import EquipmentManagement from './EquipmentManagement';
import WorkforceManagement from './WorkforceManagement';
import '../../styles/ProfessionalDashboard.css';

const TABS = {
  LIVESTOCK: 'livestock',
  POULTRY: 'poultry',
  EQUIPMENT: 'equipment',
  WORKFORCE: 'workforce'
};

export default function ProfessionalDashboard() {
  const [activeTab, setActiveTab] = useState(TABS.LIVESTOCK);

  const renderContent = () => {
    switch (activeTab) {
      case TABS.LIVESTOCK:
        return <LivestockManagement />;
      case TABS.POULTRY:
        return <PoultryManagement />;
      case TABS.EQUIPMENT:
        return <EquipmentManagement />;
      case TABS.WORKFORCE:
        return <WorkforceManagement />;
      default:
        return <LivestockManagement />;
    }
  };

  return (
    <div className="professional-dashboard">
      <header className="dashboard-header">
        <h1>Professional Farm Management</h1>
        <p>Manage your farm resources efficiently</p>
      </header>

      <nav className="dashboard-nav">
        <button
          className={`tab-button ${activeTab === TABS.LIVESTOCK ? 'active' : ''}`}
          onClick={() => setActiveTab(TABS.LIVESTOCK)}
        >
          Livestock
        </button>
        <button
          className={`tab-button ${activeTab === TABS.POULTRY ? 'active' : ''}`}
          onClick={() => setActiveTab(TABS.POULTRY)}
        >
          Poultry
        </button>
        <button
          className={`tab-button ${activeTab === TABS.EQUIPMENT ? 'active' : ''}`}
          onClick={() => setActiveTab(TABS.EQUIPMENT)}
        >
          Equipment
        </button>
        <button
          className={`tab-button ${activeTab === TABS.WORKFORCE ? 'active' : ''}`}
          onClick={() => setActiveTab(TABS.WORKFORCE)}
        >
          Workforce
        </button>
      </nav>

      <main className="dashboard-content">
        {renderContent()}
      </main>
    </div>
  );
}
