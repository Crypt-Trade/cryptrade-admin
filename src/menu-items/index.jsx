// project import
import dashboard from './dashboard';
// import pages from './page';
import utilities from './utilities';
import support from './support';
import Addusdt from './Addusdt';
import Topup from './Topup';
import Contact from './Contact';
import userwallet from './userwallet';
import withdrawal from './withdrawal';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, utilities,Addusdt,Topup, support, userwallet, withdrawal, Contact]
};

export default menuItems;
