import { Link, useLocation } from 'react-router-dom';
import { Home, Scan, GitCompare, TrendingUp, Map, Database, Brain } from 'lucide-react';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/predict', icon: Scan, label: 'Predict' },
    { path: '/compare', icon: GitCompare, label: 'Compare' },
    { path: '/ranking', icon: TrendingUp, label: 'Ranking' },
    { path: '/map', icon: Map, label: 'Map' },
    { path: '/encyclopedia', icon: Database, label: 'Encyclopedia' },
  ];

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2 className="logo">🌱 Zer3aX</h2>
          <p className="tagline">AI Plant Breeding</p>
        </div>
        
        <ul className="nav-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="sidebar-footer">
          <p className="footer-text">© 2025 Zer3aX</p>
          <p className="footer-text">Algerian Market</p>
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
