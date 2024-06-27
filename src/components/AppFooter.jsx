import { Typography } from 'antd';

export default function AppFooter() {
  return (
    <div className="appfooter">
      <Typography.Link href="tel:4255907393">425-590-7393</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        About
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        Privacy
      </Typography.Link>
    </div>
  );
}
