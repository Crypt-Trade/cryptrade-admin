// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Packages',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Add packages',
      type: 'item',
      url: '/dashboard/addpackage',
      icon: icons.BgColorsOutlined
    }
    
    
  ]
};

export default utilities;
