import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import ActivityIcon from '../../assets/svg/navIcons/activity.svg?react';
import HomeIcon from '../../assets/svg/navIcons/home.svg?react';
import PaymentsIcon from '../../assets/svg/navIcons/payments.svg?react';
import NotificationIcon from '../../assets/svg/navIcons/notification.svg?react';
import LoansIcon from '../../assets/svg/navIcons/loans.svg?react';
import { ROUTES } from '../../constants/routes';

import styles from './nav-bar.module.scss';

interface navItem {
  label: string;
  link: string;
  icon: string;
}

const navItems = [
  {
    label: 'Home',
    link: ROUTES.HOME,
    icon: <HomeIcon/>,
  },
  {
    label: 'Loans',
    link: ROUTES.LOANS,
    icon: <LoansIcon/>,
  },
  {
    label: 'Payments',
    link: ROUTES.PAYMENTS,
    icon: <PaymentsIcon/>,
  },
  {
    label: 'Activity',
    link: ROUTES.ACTIVITY,
    icon: <ActivityIcon/>,
  },
  {
    label: 'Notifications',
    link: ROUTES.NOTIFICATIONS,
    icon: <NotificationIcon/>,
  },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navBar}>
      {navItems.map((item) => (
        <Link key={item.link} to={item.link} className={clsx(styles.navItem, {
          [styles.active]: location.pathname === item.link,
        })}>
          {item.icon}
          <span className={styles.navTitle}>
             {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
