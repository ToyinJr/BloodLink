import styles from "./biostat.module.css";
import RequestTracker from "./RequestTracker";
import DonorStat from "./DonorStat";
import DonationRequestHistory from "./DonationRequestHistory";

export default function BioStat() {
  return (
    <div>
      <div className={styles.generalInfo}>
        <div className={styles.lasuth}></div>
        <div className={styles.updates}></div>
      </div>
      <DonorStat />
      <RequestTracker />
      <DonationRequestHistory />
    </div>
  );
}
