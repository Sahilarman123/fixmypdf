import { FiUsers, FiFileText, FiActivity, FiCheckCircle } from 'react-icons/fi';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="mb-4">Dashboard</h1>
      
      <div className="dashboard-cards">
        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-card-title">Total Users</span>
            <div className="stat-card-icon" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
              <FiUsers size={20} />
            </div>
          </div>
          <div className="stat-card-value">1,250</div>
          <div className="stat-card-subtitle">↑ 12% from last month</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-card-title">Processed Files</span>
            <div className="stat-card-icon" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
              <FiFileText size={20} />
            </div>
          </div>
          <div className="stat-card-value">3,456</div>
          <div className="stat-card-subtitle">↑ 8% from last month</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-card-title">Active Subscriptions</span>
            <div className="stat-card-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
              <FiActivity size={20} />
            </div>
          </div>
          <div className="stat-card-value">856</div>
          <div className="stat-card-subtitle">↑ 5% from last month</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-card-title">Success Rate</span>
            <div className="stat-card-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
              <FiCheckCircle size={20} />
            </div>
          </div>
          <div className="stat-card-value">99.2%</div>
          <div className="stat-card-subtitle">↑ 0.5% from last month</div>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-header">
          <h3 className="chart-title">User Activity</h3>
          <select className="input" style={{ width: 'auto' }}>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Chart will be displayed here</p>
        </div>
      </div>
      
      <div className="card">
        <h3 className="mb-4">Recent Activities</h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>File</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Converted PDF to Word</td>
                <td>document.pdf</td>
                <td>2023-04-15 10:30</td>
                <td><span className="badge badge-success">Completed</span></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Merged PDFs</td>
                <td>merged_docs.pdf</td>
                <td>2023-04-15 09:45</td>
                <td><span className="badge badge-success">Completed</span></td>
              </tr>
              <tr>
                <td>Robert Johnson</td>
                <td>PDF to Image</td>
                <td>presentation.pdf</td>
                <td>2023-04-14 15:20</td>
                <td><span className="badge badge-success">Completed</span></td>
              </tr>
              <tr>
                <td>Emily Brown</td>
                <td>Compressed PDF</td>
                <td>large_file.pdf</td>
                <td>2023-04-14 13:10</td>
                <td><span className="badge badge-warning">Processing</span></td>
              </tr>
              <tr>
                <td>Michael Wilson</td>
                <td>Added Password</td>
                <td>confidential.pdf</td>
                <td>2023-04-14 11:05</td>
                <td><span className="badge badge-danger">Failed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}