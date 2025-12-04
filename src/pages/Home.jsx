import { useNavigate } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  Statistic,
  Button,
  Table,
  Typography,
  Space,
  Tag
} from 'antd';
import {
  ExperimentOutlined,
  SwapOutlined,
  RiseOutlined,
  EnvironmentOutlined,
  DatabaseOutlined,
  ThunderboltOutlined,
  LineChartOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  EnvironmentFilled
} from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { kpiData, recentPredictions, trendingSpecies } from '../data/mockData';

const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();

  const getSuccessColor = (rate) => {
    if (rate >= 70) return 'success';
    if (rate >= 50) return 'warning';
    return 'error';
  };

  const columns = [
    {
      title: 'Plant A',
      dataIndex: 'plantA',
      key: 'plantA',
      render: (text) => text.split(' ')[0],
    },
    {
      title: 'Plant B',
      dataIndex: 'plantB',
      key: 'plantB',
      render: (text) => text.split(' ')[0],
    },
    {
      title: 'Success Rate',
      dataIndex: 'successRate',
      key: 'successRate',
      render: (rate) => (
        <Tag color={getSuccessColor(rate)}>{rate}%</Tag>
      ),
    },
    {
      title: 'Zone',
      dataIndex: 'zone',
      key: 'zone',
    },
  ];

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
      {/* Hero Section */}
      <Card
        style={{
          marginBottom: 24,
          background: 'linear-gradient(135deg, #16a34a 0%, #92400e 100%)',
          border: 'none'
        }}
      >
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <Title style={{ color: 'white', fontSize: '3rem', marginBottom: 8 }}>
            🌱 Zer3aX
          </Title>
          <Title level={3} style={{ color: '#86efac', marginBottom: 16 }}>
            Intelligent Plant-Breeding Assistant
          </Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: 800, margin: '0 auto' }}>
            An AI system that predicts hybrid success, recommends optimal plants,
            and analyzes traits using genetic and environmental data for the Algerian market.
          </Paragraph>
        </div>
      </Card>

      {/* KPI Cards */}
      <Title level={2} style={{ marginBottom: 16 }}>Key Metrics</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <Statistic
              title="Total Plants"
              value={kpiData.totalPlants}
              prefix={<DatabaseOutlined style={{ color: '#16a34a' }} />}
              suffix={<div style={{ fontSize: 12, color: '#6b7280' }}>+2 this month</div>}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <Statistic
              title="Traits Analyzed"
              value={kpiData.totalTraits}
              prefix={<ExperimentOutlined style={{ color: '#92400e' }} />}
              suffix={<div style={{ fontSize: 12, color: '#6b7280' }}>Updated</div>}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <Statistic
              title="Avg Success Rate"
              value={kpiData.avgSuccessRate}
              prefix={<CheckCircleOutlined style={{ color: '#16a34a' }} />}
              suffix="%"
              valueStyle={{ color: '#16a34a' }}
            />
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>+5% from last week</div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <Statistic
              title="Predictions Today"
              value={kpiData.predictionsToday}
              prefix={<SyncOutlined spin style={{ color: '#92400e' }} />}
              suffix={<div style={{ fontSize: 12, color: '#6b7280' }}>Active</div>}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <Statistic
              title="Top Zone Today"
              value={kpiData.topZoneToday}
              prefix={<EnvironmentFilled style={{ color: '#16a34a' }} />}
              suffix={<div style={{ fontSize: 12, color: '#6b7280' }}>Most popular</div>}
            />
          </Card>
        </Col>
      </Row>

      {/* Features Grid */}
      <Title level={2} style={{ marginBottom: 16 }}>What the AI Does</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={() => navigate('/predict')}
            style={{ height: '100%' }}
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <ThunderboltOutlined style={{ fontSize: 32, color: '#16a34a' }} />
              <Title level={4}>Predict Hybrid Success</Title>
              <Paragraph>AI-powered probability estimation for plant crosses</Paragraph>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={() => navigate('/compare')}
            style={{ height: '100%' }}
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <SwapOutlined style={{ fontSize: 32, color: '#92400e' }} />
              <Title level={4}>Compare Species</Title>
              <Paragraph>Side-by-side trait analysis and compatibility</Paragraph>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={() => navigate('/ranking')}
            style={{ height: '100%' }}
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <RiseOutlined style={{ fontSize: 32, color: '#16a34a' }} />
              <Title level={4}>Rank Best Plants</Title>
              <Paragraph>Performance-based ranking with filters</Paragraph>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={() => navigate('/map')}
            style={{ height: '100%' }}
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <EnvironmentOutlined style={{ fontSize: 32, color: '#92400e' }} />
              <Title level={4}>Zone Recommendations</Title>
              <Paragraph>Algerian regional plant matching system</Paragraph>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={() => navigate('/predict')}
            style={{ height: '100%' }}
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <LineChartOutlined style={{ fontSize: 32, color: '#16a34a' }} />
              <Title level={4}>Explainable AI</Title>
              <Paragraph>Understand model decisions with XAI</Paragraph>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={() => navigate('/encyclopedia')}
            style={{ height: '100%' }}
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <DatabaseOutlined style={{ fontSize: 32, color: '#92400e' }} />
              <Title level={4}>Plant Encyclopedia</Title>
              <Paragraph>Comprehensive trait database access</Paragraph>
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity */}
      <Title level={2} style={{ marginBottom: 16 }}>Recent Activity & Insights</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} lg={12}>
          <Card title="Last 5 Predictions" hoverable>
            <Table
              dataSource={recentPredictions}
              columns={columns}
              pagination={false}
              size="small"
              rowKey="id"
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Trending Species This Week" hoverable>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={trendingSpecies}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11 }}
                  angle={-15}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="uses" fill="#16a34a" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Title level={2} style={{ marginBottom: 16 }}>Quick Actions</Title>
      <Space wrap style={{ marginBottom: 32 }}>
        <Button type="primary" size="large" onClick={() => navigate('/predict')}>
          Generate Prediction
        </Button>
        <Button size="large" onClick={() => navigate('/compare')}>
          Compare Species
        </Button>
        <Button size="large" onClick={() => navigate('/map')}>
          Open Map
        </Button>
        <Button size="large" onClick={() => navigate('/ranking')}>
          View Rankings
        </Button>
      </Space>
    </div>
  );
};

export default Home;
