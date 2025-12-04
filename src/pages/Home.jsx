import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Database, 
  FlaskConical, 
  TrendingUp, 
  Map, 
  Brain, 
  Sprout,
  ArrowRight,
  Activity,
  Target,
  MapPin
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { kpiData, recentPredictions, trendingSpecies } from '../data/mockData';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const kpiCards = [
    {
      title: 'Total Plants',
      value: kpiData.totalPlants,
      icon: Sprout,
      color: 'green',
      trend: '+2 this month'
    },
    {
      title: 'Traits Analyzed',
      value: kpiData.totalTraits,
      icon: FlaskConical,
      color: 'brown',
      trend: 'Updated'
    },
    {
      title: 'Avg Success Rate',
      value: `${kpiData.avgSuccessRate}%`,
      icon: Target,
      color: 'green',
      trend: '+5% from last week'
    },
    {
      title: 'Predictions Today',
      value: kpiData.predictionsToday,
      icon: Activity,
      color: 'brown',
      trend: 'Active'
    },
    {
      title: 'Top Zone Today',
      value: kpiData.topZoneToday,
      icon: MapPin,
      color: 'green',
      trend: 'Most popular'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Predict Hybrid Success',
      description: 'AI-powered probability estimation for plant crosses',
      action: () => navigate('/predict')
    },
    {
      icon: FlaskConical,
      title: 'Compare Species',
      description: 'Side-by-side trait analysis and compatibility',
      action: () => navigate('/compare')
    },
    {
      icon: TrendingUp,
      title: 'Rank Best Plants',
      description: 'Performance-based ranking with filters',
      action: () => navigate('/ranking')
    },
    {
      icon: Map,
      title: 'Zone Recommendations',
      description: 'Algerian regional plant matching system',
      action: () => navigate('/map')
    },
    {
      icon: Brain,
      title: 'Explainable AI',
      description: 'Understand model decisions with XAI',
      action: () => navigate('/predict')
    },
    {
      icon: Database,
      title: 'Plant Encyclopedia',
      description: 'Comprehensive trait database access',
      action: () => navigate('/encyclopedia')
    }
  ];

  const getSuccessColor = (rate) => {
    if (rate >= 70) return 'var(--success)';
    if (rate >= 50) return 'var(--warning)';
    return 'var(--error)';
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="hero-title">🌱 Zer3aX</h1>
        <p className="hero-subtitle">Intelligent Plant-Breeding Assistant</p>
        <p className="hero-description">
          An AI system that predicts hybrid success, recommends optimal plants, 
          and analyzes traits using genetic and environmental data for the Algerian market.
        </p>
      </motion.section>

      {/* KPI Cards */}
      <section className="kpi-section">
        <h2 className="section-title">Key Metrics</h2>
        <div className="kpi-grid">
          {kpiCards.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={index}
                className={`kpi-card kpi-${kpi.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="kpi-icon">
                  <Icon size={24} />
                </div>
                <div className="kpi-content">
                  <p className="kpi-title">{kpi.title}</p>
                  <h3 className="kpi-value">{kpi.value}</h3>
                  <p className="kpi-trend">{kpi.trend}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <h2 className="section-title">What the AI Does</h2>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={feature.action}
              >
                <div className="feature-icon">
                  <Icon size={28} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-arrow">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Recent Activity & Insights */}
      <section className="activity-section">
        <h2 className="section-title">Recent Activity & Insights</h2>
        
        <div className="activity-grid">
          {/* Recent Predictions Table */}
          <motion.div
            className="activity-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="card-title">Last 5 Predictions</h3>
            <div className="predictions-table">
              <table>
                <thead>
                  <tr>
                    <th>Plant A</th>
                    <th>Plant B</th>
                    <th>Success %</th>
                    <th>Zone</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPredictions.map((pred) => (
                    <tr key={pred.id}>
                      <td>{pred.plantA.split(' ')[0]}</td>
                      <td>{pred.plantB.split(' ')[0]}</td>
                      <td>
                        <span 
                          className="success-badge"
                          style={{ backgroundColor: getSuccessColor(pred.successRate) }}
                        >
                          {pred.successRate}%
                        </span>
                      </td>
                      <td>{pred.zone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Trending Species Chart */}
          <motion.div
            className="activity-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="card-title">Trending Species This Week</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={trendingSpecies}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 11 }}
                  angle={-15}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="uses" fill="var(--primary-green)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions-section">
        <h2 className="section-title">Quick Actions</h2>
        <div className="quick-actions">
          <button className="action-btn primary" onClick={() => navigate('/predict')}>
            Generate Prediction
          </button>
          <button className="action-btn secondary" onClick={() => navigate('/compare')}>
            Compare Species
          </button>
          <button className="action-btn secondary" onClick={() => navigate('/map')}>
            Open Map
          </button>
          <button className="action-btn secondary" onClick={() => navigate('/ranking')}>
            View Rankings
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
