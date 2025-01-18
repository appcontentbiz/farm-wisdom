import { useState } from 'react';

const initialEquipment = [
  { 
    id: 1, 
    name: 'Tractor', 
    status: 'Operational',
    lastMaintenance: '2025-01-10',
    nextMaintenance: '2025-02-10',
    operator: 'John Smith'
  },
  { 
    id: 2, 
    name: 'Harvester', 
    status: 'Under Maintenance',
    lastMaintenance: '2025-01-15',
    nextMaintenance: '2025-01-20',
    operator: 'Sarah Johnson'
  },
  { 
    id: 3, 
    name: 'Irrigation System', 
    status: 'Operational',
    lastMaintenance: '2025-01-05',
    nextMaintenance: '2025-02-05',
    operator: 'Mike Brown'
  }
];

export default function EquipmentManagement() {
  const [equipment, setEquipment] = useState(initialEquipment);
  const [newEquipment, setNewEquipment] = useState({
    name: '',
    status: 'Operational',
    lastMaintenance: new Date().toISOString().split('T')[0],
    nextMaintenance: '',
    operator: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEquipment([
      ...equipment,
      {
        id: equipment.length + 1,
        ...newEquipment
      }
    ]);
    setNewEquipment({
      name: '',
      status: 'Operational',
      lastMaintenance: new Date().toISOString().split('T')[0],
      nextMaintenance: '',
      operator: ''
    });
  };

  return (
    <div className="management-section">
      <div className="section-header">
        <h2>Equipment Management</h2>
        <p>Track and maintain your farm equipment</p>
      </div>

      <div className="management-content">
        <div className="add-form">
          <h3>Add New Equipment</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Equipment Name</label>
              <input
                type="text"
                id="name"
                value={newEquipment.name}
                onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={newEquipment.status}
                onChange={(e) => setNewEquipment({ ...newEquipment, status: e.target.value })}
              >
                <option value="Operational">Operational</option>
                <option value="Under Maintenance">Under Maintenance</option>
                <option value="Out of Service">Out of Service</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nextMaintenance">Next Maintenance Date</label>
              <input
                type="date"
                id="nextMaintenance"
                value={newEquipment.nextMaintenance}
                onChange={(e) => setNewEquipment({ ...newEquipment, nextMaintenance: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="operator">Primary Operator</label>
              <input
                type="text"
                id="operator"
                value={newEquipment.operator}
                onChange={(e) => setNewEquipment({ ...newEquipment, operator: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Add Equipment
            </button>
          </form>
        </div>

        <div className="data-table">
          <h3>Current Equipment</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Last Maintenance</th>
                <th>Next Maintenance</th>
                <th>Operator</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.lastMaintenance}</td>
                  <td>{item.nextMaintenance}</td>
                  <td>{item.operator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
