import { FiEdit, FiTrash2, FiEye, FiPlus } from 'react-icons/fi';

export default function Users() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1>Users</h1>
        <button className="btn btn-primary">
          <FiPlus size={18} style={{ marginRight: '8px' }} />
          Add New User
        </button>
      </div>
      
      <div className="card">
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <select className="input" style={{ width: 'auto' }}>
              <option>All Users</option>
              <option>Admin</option>
              <option>Regular</option>
              <option>Premium</option>
            </select>
            <button className="btn btn-outline">Filter</button>
          </div>
          
          <div>
            <input 
              type="text" 
              placeholder="Search users..." 
              className="input" 
              style={{ width: 'auto' }}
            />
          </div>
        </div>
        
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>Admin</td>
                <td><span className="badge badge-success">Active</span></td>
                <td>2023-01-15</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEye size={16} />
                    </button>
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEdit size={16} />
                    </button>
                    <button className="btn btn-danger" style={{ padding: '4px 8px' }}>
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>Premium</td>
                <td><span className="badge badge-success">Active</span></td>
                <td>2023-02-10</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEye size={16} />
                    </button>
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEdit size={16} />
                    </button>
                    <button className="btn btn-danger" style={{ padding: '4px 8px' }}>
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Robert Johnson</td>
                <td>robert@example.com</td>
                <td>Regular</td>
                <td><span className="badge badge-danger">Inactive</span></td>
                <td>2023-02-22</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEye size={16} />
                    </button>
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEdit size={16} />
                    </button>
                    <button className="btn btn-danger" style={{ padding: '4px 8px' }}>
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Emily Brown</td>
                <td>emily@example.com</td>
                <td>Premium</td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td>2023-03-05</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEye size={16} />
                    </button>
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEdit size={16} />
                    </button>
                    <button className="btn btn-danger" style={{ padding: '4px 8px' }}>
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Michael Wilson</td>
                <td>michael@example.com</td>
                <td>Regular</td>
                <td><span className="badge badge-success">Active</span></td>
                <td>2023-03-20</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEye size={16} />
                    </button>
                    <button className="btn btn-outline" style={{ padding: '4px 8px' }}>
                      <FiEdit size={16} />
                    </button>
                    <button className="btn btn-danger" style={{ padding: '4px 8px' }}>
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div>Showing 1 to 5 of 25 entries</div>
          <div className="flex gap-2">
            <button className="btn btn-outline" disabled>Previous</button>
            <button className="btn btn-primary">1</button>
            <button className="btn btn-outline">2</button>
            <button className="btn btn-outline">3</button>
            <button className="btn btn-outline">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}