import NoActivityIcon from '../../assets/svg/no-activity.svg?react';

import styles from './no-data.module.scss';
import React from 'react';

interface NoDataProps {
  type: 'activity' | 'loan' | 'payment'
  title: string
  message: string
  children: React.ReactNode
}

const NoData = ({
  type,
  title,
  message,
  children,
}: NoDataProps) => {

  const getIcon = () => {
    switch (type) {
      case 'activity':
        return <NoActivityIcon/>;
      case 'loan':
        return 'loan';
      case 'payment':
        return 'payment';
    }
  }

  return (
    <div className={styles.noData}>
      <div className={styles.iconWrapper}>
        {getIcon()}
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.message}>
        {message}
      </div>
      {children}
    </div>
  );
}

export default NoData;
