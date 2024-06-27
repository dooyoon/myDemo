import { BellOutlined, MailOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';

export default function AppHeader() {
  return (
    <div className="appheader">
      <img width={40} src="//upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Seal_of_Washington.svg/100px-Seal_of_Washington.svg.png" />
      Company
      <div className="flex gap-1 mr-4">
        <Badge count={1} dot>
          <Button icon={<MailOutlined />} />
        </Badge>
        <Badge count={1}>
          <Button icon={<BellOutlined />} />
        </Badge>
      </div>
    </div>
  );
}
