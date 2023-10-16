import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  colorWeak: false,
  title: '',
  pwa: false,
  headerTheme: 'dark',
  fixSiderbar: true,
  iconfontUrl: '',
};

export default Settings;
