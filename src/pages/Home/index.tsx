import { Link } from 'react-router-dom';

import user from '../../assets/user.png';
import MyLoansWidget from './components/MyLoansWidget';
import ArrowRightIcon from '../../assets/svg/arrow-right.svg?react';
import termsImage from '../../assets/terms.png';
import { ROUTES } from '../../constants/routes';
import ActivityWidget, { ActivityWidgetProps } from './components/ActivityWidget';

import styles from './home.module.scss';

const activityWidgets: ActivityWidgetProps[] = [
  {
    type: 'debt',
    description: 'High interest debts have been noticed on your account Explore consolidation offers for a better interest rate.',
    image: termsImage,
    title: 'Get up to $100k in loan',
    duration: '~ 12 month',
    apr: '8% - 12% APR',
    offers: 4,
  },
  {
    type: 'loan',
    description: 'High interest debts have been noticed on your account Explore consolidation offers for a better interest rate.',
    image: termsImage,
    title: 'Get up to $100k in loan',
    duration: '~ 12 month',
    apr: '8% - 12% APR',
    offers: 3
  }
];

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.header}>
        <div className={styles.hi}>
          Hi, John
        </div>
        <img src={user} alt="user"/>
      </div>

      <MyLoansWidget/>
      <div className={styles.businessActivity}>
        <Link to={ROUTES.ACTIVITY} className={styles.title}>
          Business Activity
          <ArrowRightIcon />
        </Link>
        <div className={styles.widgets}>
          {activityWidgets.map((widget, index) => (
            <ActivityWidget key={index} {...widget}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
