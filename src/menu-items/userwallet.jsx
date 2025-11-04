import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};
 const userwallet = {
    id: 'userwallet',
      title: 'User wallet',
      type: 'group',
      children: [
        {
          id: 'documentation',
          title: 'User wallet details',
          type: 'item',
          url: '/dashboard/wallet',
          icon: icons.ChromeOutlined,
        },
        // {
        //   id: 'user-kyc',
        //   title: 'All approved wallet details',
        //   type: 'item',
        //    url: '/dashboard/approvedwallet',
        //   icon: icons.ChromeOutlined,
        // },
      
        // {
        //   id: 'user-kyc2',
        //   title: 'All rejected wallet details',
        //   type: 'item',
        //    url: '/dashboard/nonapprovedwallet',
        //   icon: icons.ChromeOutlined,
        // }
       
      ]
 }
 export default userwallet;