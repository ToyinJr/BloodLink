import styles from "./appointment.module.css";

export default function Appointment() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>My Appointment</p>
      <div className={styles.appointmentContainer}>
        {/* first appointment */}
        <div className={styles.appointment}>
          <div className={styles.appointmentInfo}>
            <p className={styles.timestamp}>October 15, 2024 / 9:00 AM </p>
            <p className={styles.location}>
              <strong>Location:</strong> Lagos State University Teaching
              Hospital Ikeja,Lagos.
            </p>
            <p className={styles.donation}>
              <strong>Donation Type:</strong> Whole Blood
            </p>
          </div>
          <button className={styles.btnPending}>Pending</button>
        </div>
        {/* second appointment */}
        <div className={styles.appointment}>
          <div className={styles.appointmentInfo}>
            <p className={styles.timestamp}>October 15, 2024 / 11:00 AM </p>
            <p className={styles.location}>
              <strong>Location:</strong> BlueCross Hospital Ikeja, Lagos
            </p>
            <p className={styles.donation}>
              <strong>Donation Type:</strong> Plasma Blood
            </p>
          </div>
          <button className={styles.btnPending}>Pending</button>
        </div>
        {/* third appointment */}
        <div className={styles.appointment}>
          <div className={styles.appointmentInfo}>
            <p className={styles.timestamp}>October 15, 2024 / 8:30 AM </p>
            <p className={styles.location}>
              <strong>Location:</strong> National Blood Transfusion Service, Lagos.
            </p>
            <p className={styles.donation}>
              <strong>Duration Type:</strong> Platelet Blood
            </p>
          </div>
          <button className={styles.btnPending}>Pending</button>
        </div>
        {/* fourth appointment */}
        <div className={styles.appointment}>
          <div className={styles.appointmentInfo}>
            <p className={styles.timestamp}>October 15, 2024 / 10:00 AM </p>
            <p className={styles.location}>
              <strong>Location:</strong> General Hospital Ikeja, Lagos
            </p>
            <p className={styles.donation}>
              <strong>Duration Type:</strong> Whole Blood
            </p>
          </div>
          <button className={styles.btnPending}>Pending</button>
        </div>
      </div>
    </div>
  );
}
