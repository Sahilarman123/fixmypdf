'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiFile, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { 
      name: 'Dashboard', 
      path: '/admin', 
      icon: <FiHome size={18} /> 
    },
    { 
      name: 'FixMyPDF', 
      path: '/admin/pdf-tools', 
      icon: <FiFile size={18} /> 
    },
    { 
      name: 'Users', 
      path: '/admin/users', 
      icon: <FiUsers size={18} /> 
    },
    { 
      name: 'Settings', 
      path: '/admin/settings', 
      icon: <FiSettings size={18} /> 
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>FixMyPDF Admin</h2>
      </div>
      
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                href={item.path} 
                className={`nav-link ${pathname === item.path ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
        <button className="nav-link" style={{ width: '100%', justifyContent: 'flex-start' }}>
          <FiLogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}