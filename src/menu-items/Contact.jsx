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
    }
]
}
export default Contact;