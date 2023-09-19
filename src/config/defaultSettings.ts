import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  colorWeak: false,
  title: '项目管理',
  pwa: false,
  headerTheme: 'light',
  iconfontUrl: '',
};

export default Settings;
