import { useState } from 'react';

const initialPoultry = [
  { id: 1, type: 'Chickens', count: 200, purpose: 'Eggs', health: 'Good', lastVaccination: '2025-01-10' },
  { id: 2, type: 'Ducks', count: 50, purpose: 'Meat', health: 'Excellent', lastVaccination: '2025-01-12' },
  { id: 3, type: 'Turkeys', count: 30, purpose: 'Meat', health: 'Good', lastVaccination: '2025-01-15' }
];

export default function PoultryManagement() {
  const [poultry, setPoultry] = useState(initialPoultry);
  const [newBird, setNewBird] = useState({
    type: '',
    count: '',
    purpose: 'Eggs',
    health: 'Good',
    lastVaccination: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPoultry([
      ...poultry,
      {
        id: poultry.length + 1,
        ...newBird,
        count: parseInt(newBird.count)
      }
    ]);
    setNewBird({
      type: '',
      count: '',
      purpose: 'Eggs',
      health: 'Good',
      lastVaccination: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="management-section">
      <div className="section-header">
        <h2>Poultry Management</h2>
        <p>Track and manage your poultry operations</p>
      </div>

      <div className="management-content">
        <div className="add-form">
          <h3>Add New Poultry</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="type">Bird Type</label>
              <input
                type="text"
                id="type"
                value={newBird.type}
                onChange={(e) => setNewBird({ ...newBird, type: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="count">Count</label>
              <input
                type="number"
                id="count"
                value={newBird.count}
                onChange={(e) => setNewBird({ ...newBird, count: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="purpose">Purpose</label>
              <select
                id="purpose"
                value={newBird.purpose}
                onChange={(e) => setNewBird({ ...newBird, purpose: e.target.value })}
              >
                <option value="Eggs">Eggs</option>
                <option value="Meat">Meat</option>
                <option value="Both">Both</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="health">Health Status</label>
              <select
                id="health"
                value={newBird.health}
                onChange={(e) => setNewBird({ ...newBird, health: e.target.value })}
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>

            <button type="submit" className="submit-button">
              Add Poultry
            </button>
          </form>
        </div>

        <div className="data-table">
          <h3>Current Poultry</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Count</th>
                <th>Purpose</th>
                <th>Health</th>
                <th>Last Vaccination</th>
              </tr>
            </thead>
            <tbody>
              {poultry.map((bird) => (
                <tr key={bird.id}>
                  <td>{bird.type}</td>
                  <td>{bird.count}</td>
                  <td>{bird.purpose}</td>
                  <td>
                    <span className={`health-status ${bird.health.toLowerCase()}`}>
                      {bird.health}
                    </span>
                  </td>
                  <td>{bird.lastVaccination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
