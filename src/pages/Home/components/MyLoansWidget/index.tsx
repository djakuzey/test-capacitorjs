import {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../components/button';
import InfoIcon from '../../../../assets/svg/info.svg?react';
import InfoArrowRight from '../../../../assets/svg/arrow-right.svg?react';

import { ROUTES } from "../../../../constants/routes";
import styles from './my-loans-widget.module.scss';
import HalfCircleProgress from "./progressArck";

const MyLoansWidget = () => {
  const [progress, setProgress] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(Math.floor(Math.random() * 100))
    }, 3000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className={styles.widgetWrapper}>
      <Link to={ROUTES.LOANS} className={styles.header}>
        <div className={styles.left}>
          <InfoIcon />
          Loan 3898 Payment due in 5 days
        </div>
        <div className={styles.right}>
          <InfoArrowRight/>
        </div>
      </Link>
      <div className={styles.body}>
        <div className={styles.loanBalance}>
          <HalfCircleProgress progress={progress}/>
          <div className={styles.loanContent}>
            <div className={styles.loanTitle}>
              Loan Balance
            </div>
            <div className={styles.loanValue}>
              $140.53k
            </div>
          </div>
        </div>
        <div className={styles.counter}>
          <div className={styles.counterItem}>
            <div className={styles.title}>
              Total Amount
            </div>
            <div className={styles.value}>
              $358.00k
            </div>
          </div>
          <div className={styles.counterItem}>
            <div className={styles.title}>
              Active Loans
            </div>
            <div className={styles.value}>
              05
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button variant="secondary">
            My Loans
          </Button>
          <Button>
            Make Payment
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MyLoansWidget;
