import styles from "./donorheader.module.css";
const image_url = "../../images/donor_header_pic.png";

export default function DonorHeader() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Become the Change: Help us transform lives today with BloodLink
      </h1>
      <p className={styles.headerText}>
        By donating blood, volunteering, or spreading awareness, you can make a
        real difference in your community and beyond.
      </p>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={image_url}
          alt="doctor applying plaster to blood donor"
        />
        <div className={styles.stats}>
          <p className={styles.percentage}>30-50%</p>
          <p className={styles.paragraphStat}>Returning</p>
          <p className={styles.paragraphStat}>within a year</p>
        </div>
      </div>
    </div>
  );
}
