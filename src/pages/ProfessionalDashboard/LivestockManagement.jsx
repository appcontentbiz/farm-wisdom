import { useState } from 'react';

const initialLivestock = [
  { id: 1, type: 'Cattle', count: 50, health: 'Good', lastCheckup: '2025-01-15' },
  { id: 2, type: 'Sheep', count: 100, health: 'Excellent', lastCheckup: '2025-01-14' },
  { id: 3, type: 'Goats', count: 75, health: 'Good', lastCheckup: '2025-01-13' }
];

export default function LivestockManagement() {
  const [livestock, setLivestock] = useState(initialLivestock);
  const [newAnimal, setNewAnimal] = useState({
    type: '',
    count: '',
    health: 'Good',
    lastCheckup: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLivestock([
      ...livestock,
      {
        id: livestock.length + 1,
        ...newAnimal,
        count: parseInt(newAnimal.count)
      }
    ]);
    setNewAnimal({
      type: '',
      count: '',
      health: 'Good',
      lastCheckup: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="management-section">
      <div className="section-header">
        <h2>Livestock Management</h2>
        <p>Track and manage your farm animals</p>
      </div>

      <div className="management-content">
        <div className="add-form">
          <h3>Add New Livestock</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="type">Animal Type</label>
              <input
                type="text"
                id="type"
                value={newAnimal.type}
                onChange={(e) => setNewAnimal({ ...newAnimal, type: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="count">Count</label>
              <input
                type="number"
                id="count"
                value={newAnimal.count}
                onChange={(e) => setNewAnimal({ ...newAnimal, count: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="health">Health Status</label>
              <select
                id="health"
                value={newAnimal.health}
                onChange={(e) => setNewAnimal({ ...newAnimal, health: e.target.value })}
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>

            <button type="submit" className="submit-button">
              Add Livestock
            </button>
          </form>
        </div>

        <div className="data-table">
          <h3>Current Livestock</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Count</th>
                <th>Health</th>
                <th>Last Checkup</th>
              </tr>
            </thead>
            <tbody>
              {livestock.map((animal) => (
                <tr key={animal.id}>
                  <td>{animal.type}</td>
                  <td>{animal.count}</td>
                  <td>
                    <span className={`health-status ${animal.health.toLowerCase()}`}>
                      {animal.health}
                    </span>
                  </td>
                  <td>{animal.lastCheckup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
