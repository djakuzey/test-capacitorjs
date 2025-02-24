import clsx from 'clsx';

import LibraIcon from '../../../../assets/svg/libra.svg?react';
import ArrowRightIcon from '../../../../assets/svg/arrow-right.svg?react';

import styles from './activity-widget.module.scss';

export interface ActivityWidgetProps {
  type: 'debt' | 'payment' | 'loan'
  description: string
  image: string
  title: string
  duration: string
  apr: string
  offers: number
}

const ActivityWidget = ({
  type,
  description,
  image,
  title,
  duration,
  apr,
  offers,
}: ActivityWidgetProps) => {
  return (
    <div className={styles.activityWidget}>
      <div className={clsx(styles.badge, styles[type])}>
        <LibraIcon/> {type}
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.bottom}>
        <div className={styles.terms}>
          <img src={image} alt="image" className={styles.termsImage}/>
          <div className={styles.termsBody}>
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.subtitle}>
              {apr} <div className={styles.divider}/> {duration}
            </div>
          </div>
        </div>
        <div className={styles.offers}>
          View {offers} More Offers <ArrowRightIcon />
        </div>
      </div>
    </div>
  )
}

export default ActivityWidget;
