import NoData from '../../components/NoData';
import Button from '../../components/button';

import styles from './loans.module.scss';

const Loans = () => {
  return (
    <div className={styles.loansWrapper}>
      <h1 className={styles.title}>Loans</h1>
      <NoData
        title="You have no loans yet"
        message="This is where you'll manage your loans, track payments, apply for new ones, and stay on top of your finances. Apply for a loan now to begin."
        type="loan"
      />
    </div>
  );
}

export default Loans;
