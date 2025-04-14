import { ChromeOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined
};
const withdrawal =  {
 id: 'withdrawal',
   title: 'Withdrawal',
   type: 'group',
   children: [
     {
       id: 'sample-page3',
       title: 'All user withdrawals',
       type: 'item',
       url: '/dashboard/withdrawalusers',
       icon: icons.ChromeOutlined
     }
     
   ]
}

export default withdrawal;