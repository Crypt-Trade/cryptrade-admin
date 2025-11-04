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
  title: 'Payout',
  type: 'group',
  children: [
   {
      id: 'Weeklypayout',
      title: 'Payout',
      type: 'item',
      url: "/dashboard/Weeklypayout",
      icon: icons.ChromeOutlined,
    }
    
    
  ]
};

export default utilities;
