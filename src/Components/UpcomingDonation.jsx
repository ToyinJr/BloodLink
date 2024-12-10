import styles from "./upcomingdonation.module.css";

export default function UpcomingDonation() {
  return (
    <div className={styles.container}>
      <p className={styles.upcomingDonationHeader}>Upcoming Donations</p>

      <p className={styles.upcomingText}>
        Easily track,modify,or cancel your upcoming donations, and receive
        reminders to ensure you're always ready to help save lives!
      </p>
    </div>
  );
}
