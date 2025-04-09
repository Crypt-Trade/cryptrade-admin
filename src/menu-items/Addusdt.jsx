import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};
const Addusdt = {
  id: 'addusdt',
  title: 'USDT',
  type: 'group',
  children: [
    {
      id: 'sample-page2',
      title: 'Add USDT',
      type: 'item',
      url: '/dashboard/addusdt',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation2',
      title: 'Wallet history',
      type: 'item',
      url: '/dashboard/historyUsdt',
      icon: icons.ChromeOutlined,
      
     
    }
    
  ]
};

export default Addusdt;