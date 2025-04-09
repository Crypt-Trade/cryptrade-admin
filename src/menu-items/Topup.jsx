import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};
const Topup =  {
 id: 'addusdt',
   title: 'Top-up Dashboard ',
   type: 'group',
   children: [
     {
       id: 'sample-page3',
       title: 'Add usdt',
       type: 'item',
       url: '/dashboard/topupaddusdt',
       icon: icons.ChromeOutlined
     },
     {
       id: 'documentation2',
       title: 'Wallet history',
       type: 'item',
       url: '/dashboard/topuphistory',
       icon: icons.ChromeOutlined,
       
      
     }
     
   ]
}

export default Topup