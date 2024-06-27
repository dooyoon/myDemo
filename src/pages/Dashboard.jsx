import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Space, Statistic, Typography } from 'antd';

export default function Dashboard() {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          title={'Orders'}
          value={12345}
          icon={
            <ShoppingCartOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={'Inventory'}
          value={12345}
          icon={
            <ShoppingOutlined
              style={{
                color: 'blue',
                backgroundColor: 'rgba(0,255,255,.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={'Customer'}
          value={12345}
          icon={
            <UserOutlined
              style={{
                color: 'purple',
                backgroundColor: 'rgba(255,0,255,.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={'Revenue'}
          value={12345}
          icon={
            <bi-arrow-through-heart
              style={{
                color: 'red',
                backgroundColor: 'rgba(255,0,0,.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
        />
      </Space>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
