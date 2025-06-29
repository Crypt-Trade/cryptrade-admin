import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};
const Contact = {
  id: 'contact',
  title: 'Others',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Contact details',
      type: 'item',
      url: '/dashboard/contact',
      icon: icons.ChromeOutlined
    },
    {
      id: 'scholarship',
      title: 'Monthly Scholarship',
      type: 'item',
      url: '/dashboard/scholarship',
      icon: icons.ChromeOutlined
    },
    {
      id: 'allrank',
      title: 'All Rank',
      type: 'item',
      url: '/dashboard/allrank',
      icon: icons.ChromeOutlined
    },
    
]
}
export default Contact;