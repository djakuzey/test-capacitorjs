import styles from './activity.module.scss';
import NoData from "../../components/NoData";
import Button from "../../components/button";

const Activity = () => {
  return (
    <div className={styles.activityWrapper}>
      <h1 className={styles.title}>Activity</h1>
      <NoData
        title="No loan activity yet"
        message="Your loan transactions will appear here. Track payments, disbursements, and other updates as they happen."
        type="activity"
      >
        <Button className={styles.button} variant="primary">
          Apply for a Loan
        </Button>
      </NoData>
    </div>
  );
}

export default Activity;
