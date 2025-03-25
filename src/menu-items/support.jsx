// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Others',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'All user',
      type: 'item',
      url: '/dashboard/alluser',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
      title: 'Wallet',
      type: 'item',
      url: '/dashboard/wallet',
      icon: icons.ChromeOutlined,
      
     
    },
    {
      id: 'Weeklypayout',
      title: 'Weekly Payout',
      type: 'item',
      url: "/dashboard/Weeklypayout",
      icon: icons.ChromeOutlined,
    
    }
  ]
};

export default support;
