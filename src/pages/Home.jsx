import { useNavigate } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  Statistic,
  Table,
  Typography,
  Tag
} from 'antd';
import {
  ExperimentOutlined,
  DatabaseOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  EnvironmentFilled,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { kpiData, recentPredictions, trendingSpecies } from '../data/mockData';

const { Title, Text } = Typography;

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
      render: (text) => <Text style={{ color: '#d1d5db' }}>{text.split(' ')[0]}</Text>,
    },
    {
      title: 'Plant B',
      dataIndex: 'plantB',
      key: 'plantB',
      render: (text) => <Text style={{ color: '#d1d5db' }}>{text.split(' ')[0]}</Text>,
    },
    {
      title: 'Success Rate',
      dataIndex: 'successRate',
      key: 'successRate',
      render: (rate) => (
        <Tag
          color={rate >= 70 ? '#10b981' : rate >= 50 ? '#f59e0b' : '#ef4444'}
          style={{ borderRadius: 6, fontWeight: 600 }}
        >
          {rate}%
        </Tag>
      ),
    },
    {
      title: 'Zone',
      dataIndex: 'zone',
      key: 'zone',
      render: (text) => <Text style={{ color: '#9ca3af' }}>{text}</Text>,
    },
  ];

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '24px' }}>
      {/* Welcome Section */}
      <div style={{ marginBottom: 32 }}>
        <Title level={4} style={{ color: '#9ca3af', fontWeight: 400, marginBottom: 8 }}>
          Here, take a look at your analytics.
        </Title>
      </div>

      {/* KPI Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} lg={8}>
          <Card
            bordered={false}
            style={{
              background: '#1f2937',
              borderRadius: 12,
              border: '1px solid #374151'
            }}
          >
            <Statistic
              title={<span style={{ color: '#9ca3af', fontSize: 13 }}>Total Plants</span>}
              value={kpiData.totalPlants}
              valueStyle={{ color: '#f9fafb', fontSize: 28, fontWeight: 600 }}
              prefix={<DatabaseOutlined style={{ color: '#3b82f6' }} />}
            />
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
              <ArrowUpOutlined style={{ color: '#10b981', fontSize: 12 }} />
              <Text style={{ color: '#10b981', fontSize: 12 }}>+2</Text>
              <Text style={{ color: '#6b7280', fontSize: 12 }}>vs Previous 30 Days</Text>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card
            bordered={false}
            style={{
              background: '#1f2937',
              borderRadius: 12,
              border: '1px solid #374151'
            }}
          >
            <Statistic
              title={<span style={{ color: '#9ca3af', fontSize: 13 }}>Traits Analyzed</span>}
              value={kpiData.totalTraits}
              valueStyle={{ color: '#f9fafb', fontSize: 28, fontWeight: 600 }}
              prefix={<ExperimentOutlined style={{ color: '#06b6d4' }} />}
            />
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
              <ArrowUpOutlined style={{ color: '#10b981', fontSize: 12 }} />
              <Text style={{ color: '#10b981', fontSize: 12 }}>+12%</Text>
              <Text style={{ color: '#6b7280', fontSize: 12 }}>vs Previous 30 Days</Text>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card
            bordered={false}
            style={{
              background: '#1f2937',
              borderRadius: 12,
              border: '1px solid #374151'
            }}
          >
            <Statistic
              title={<span style={{ color: '#9ca3af', fontSize: 13 }}>Avg Success Rate</span>}
              value={kpiData.avgSuccessRate}
              suffix="%"
              valueStyle={{ color: '#10b981', fontSize: 28, fontWeight: 600 }}
              prefix={<CheckCircleOutlined style={{ color: '#10b981' }} />}
            />
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
              <ArrowUpOutlined style={{ color: '#10b981', fontSize: 12 }} />
              <Text style={{ color: '#10b981', fontSize: 12 }}>+5%</Text>
              <Text style={{ color: '#6b7280', fontSize: 12 }}>vs Previous 30 Days</Text>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card
            bordered={false}
            style={{
              background: '#1f2937',
              borderRadius: 12,
              border: '1px solid #374151'
            }}
          >
            <Statistic
              title={<span style={{ color: '#9ca3af', fontSize: 13 }}>Predictions Today</span>}
              value={kpiData.predictionsToday}
              valueStyle={{ color: '#f9fafb', fontSize: 28, fontWeight: 600 }}
              prefix={<SyncOutlined spin style={{ color: '#f59e0b' }} />}
            />
            <div style={{ marginTop: 12 }}>
              <Text style={{ color: '#6b7280', fontSize: 12 }}>Active</Text>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card
            bordered={false}
            style={{
              background: '#1f2937',
              borderRadius: 12,
              border: '1px solid #374151'
            }}
          >
            <Statistic
              title={<span style={{ color: '#9ca3af', fontSize: 13 }}>Top Zone Today</span>}
              value={kpiData.topZoneToday}
              valueStyle={{ color: '#f9fafb', fontSize: 24, fontWeight: 600 }}
              prefix={<EnvironmentFilled style={{ color: '#3b82f6' }} />}
            />
            <div style={{ marginTop: 12 }}>
              <Text style={{ color: '#6b7280', fontSize: 12 }}>Most popular</Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity */}
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} lg={12}>
          <Card
            title={<span style={{ color: '#f9fafb', fontSize: 16, fontWeight: 600 }}>Last 5 Predictions</span>}
            bordered={false}
            style={{
              background: '#1f2937',
              borderRadius: 12,
              border: '1px solid #374151'
            }}
          >
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
          <Card
            title={<span style={{ color: '#f9fafb', fontSize: 16, fontWeight: 600 }}>Trending Species This Week</span>}
            bordered={false}
            style={{
              background: '#1f2937',
              borderRadius: 12,
              border: '1px solid #374151'
            }}
          >
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={trendingSpecies}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: '#9ca3af' }}
                  angle={-15}
                  textAnchor="end"
                  height={80}
                  stroke="#374151"
                />
                <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} stroke="#374151" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: 8,
                    color: '#f9fafb'
                  }}
                />
                <Bar dataKey="uses" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
