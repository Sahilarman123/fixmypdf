import Link from 'next/link';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

export default function PDFTools() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1>FixMyPDF</h1>
        <button className="btn btn-primary">
          <FiPlus size={18} style={{ marginRight: '8px' }} />
          Add New Tool
        </button>
      </div>
      
      <div className="card">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tool Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>PDF to Word</td>
                <td>Convert PDF documents to editable Word files</td>
                <td>Conversion</td>
                <td><span className="badge badge-success">Active</span></td>
                <td>
                  <div className="flex gap-2">
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
                <td>PDF Merger</td>
                <td>Combine multiple PDF files into one</td>
                <td>Manipulation</td>
                <td><span className="badge badge-success">Active</span></td>
                <td>
                  <div className="flex gap-2">
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
                <td>PDF Compressor</td>
                <td>Reduce the size of PDF files</td>
                <td>Optimization</td>
                <td><span className="badge badge-success">Active</span></td>
                <td>
                  <div className="flex gap-2">
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
                <td>PDF to Image</td>
                <td>Convert PDF pages to image formats</td>
                <td>Conversion</td>
                <td><span className="badge badge-warning">Maintenance</span></td>
                <td>
                  <div className="flex gap-2">
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
                <td>PDF Password Protector</td>
                <td>Add password protection to PDF files</td>
                <td>Security</td>
                <td><span className="badge badge-danger">Inactive</span></td>
                <td>
                  <div className="flex gap-2">
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
      </div>
    </div>
  );
}