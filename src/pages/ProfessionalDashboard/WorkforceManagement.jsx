import { useState } from 'react';

const initialWorkers = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Farm Manager',
    schedule: 'Full-time',
    contact: '555-0101',
    specialization: 'Livestock Management'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Equipment Operator',
    schedule: 'Full-time',
    contact: '555-0102',
    specialization: 'Heavy Machinery'
  },
  {
    id: 3,
    name: 'Mike Brown',
    role: 'Field Worker',
    schedule: 'Seasonal',
    contact: '555-0103',
    specialization: 'Crop Harvesting'
  }
];

export default function WorkforceManagement() {
  const [workers, setWorkers] = useState(initialWorkers);
  const [newWorker, setNewWorker] = useState({
    name: '',
    role: '',
    schedule: 'Full-time',
    contact: '',
    specialization: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkers([
      ...workers,
      {
        id: workers.length + 1,
        ...newWorker
      }
    ]);
    setNewWorker({
      name: '',
      role: '',
      schedule: 'Full-time',
      contact: '',
      specialization: ''
    });
  };

  return (
    <div className="management-section">
      <div className="section-header">
        <h2>Workforce Management</h2>
        <p>Manage your farm workers and their schedules</p>
      </div>

      <div className="management-content">
        <div className="add-form">
          <h3>Add New Worker</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={newWorker.name}
                onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                value={newWorker.role}
                onChange={(e) => setNewWorker({ ...newWorker, role: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="schedule">Schedule</label>
              <select
                id="schedule"
                value={newWorker.schedule}
                onChange={(e) => setNewWorker({ ...newWorker, schedule: e.target.value })}
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Seasonal">Seasonal</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="tel"
                id="contact"
                value={newWorker.contact}
                onChange={(e) => setNewWorker({ ...newWorker, contact: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="specialization">Specialization</label>
              <input
                type="text"
                id="specialization"
                value={newWorker.specialization}
                onChange={(e) => setNewWorker({ ...newWorker, specialization: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Add Worker
            </button>
          </form>
        </div>

        <div className="data-table">
          <h3>Current Workforce</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Schedule</th>
                <th>Contact</th>
                <th>Specialization</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => (
                <tr key={worker.id}>
                  <td>{worker.name}</td>
                  <td>{worker.role}</td>
                  <td>
                    <span className={`schedule-badge ${worker.schedule.toLowerCase()}`}>
                      {worker.schedule}
                    </span>
                  </td>
                  <td>{worker.contact}</td>
                  <td>{worker.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
