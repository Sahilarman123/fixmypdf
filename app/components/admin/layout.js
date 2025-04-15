import Sidebar from '../components/admin/Sidebar';

export default function AdminLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}