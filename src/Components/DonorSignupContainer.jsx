import styles from "./donor_signup_container.module.css";

export default function DonorContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
