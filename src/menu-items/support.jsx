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
  title: 'User',
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
      id:'user-order',
      title: 'User Orders',
      type: 'item',
      url: '/dashboard/userorder',
      icon: icons.ChromeOutlined,
    },
    
  ]
};

export default support;
