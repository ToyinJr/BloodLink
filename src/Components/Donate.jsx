import styles from "./donate.module.css";

export default function Donate() {
  return (
    <div className={styles.parentContainer}>
      <p className={styles.canDonate}> Can I Donate?</p>
      <div
        className={`${styles.p} ${styles.sectionHeader} ${styles.container}`}
      >
        <p className={styles.p}>Check Your Eligibilty to Donate Blood</p>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          est!
        </p>
        <div className={styles.separatorFirst}></div>
        <div className={styles.sectionContainer}>
          {/* first section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.p}>Age</p>
              <p className={styles.p}>Are you between the ages of 18-65?</p>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="age" id="yes" />
              <label className={styles.label} htmlFor="yes">
                Yes
              </label>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="age" id="no" />
              <label className={styles.label} htmlFor="no">
                No
              </label>
            </div>
          </div>

          {/* second section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.p}>Weight</p>
              <p className={styles.p}>Do you weigh more than 50kg?</p>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="weight" id="yes" />
              <label className={styles.label} htmlFor="yes">
                Yes
              </label>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="weight" id="no" />
              <label className={styles.label} htmlFor="no">
                No
              </label>
            </div>
          </div>
          {/* third section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.p}>Health</p>
              <p className={styles.p}>
                Have you had any illness, surgery, or received a blood
                transfusion in the last 12 months?
              </p>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="health" id="yes" />
              <label className={styles.label} htmlFor="yes">
                Yes
              </label>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="health" id="no" />
              <label className={styles.label} htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.sectionContainer}>
          {/* first section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.p}>Previous Blood Donation</p>
              <p className={styles.p}>
                Have you donated blood in the last 3-6 months?
              </p>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="blood" id="yes" />
              <label className={styles.label} htmlFor="yes">
                Yes
              </label>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="blood" id="no" />
              <label className={styles.label} htmlFor="no">
                No
              </label>
            </div>
          </div>
          {/* second section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.p}>Medications</p>
              <p className={styles.p}>
                Are you currently taking any prescribed medications?
              </p>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="medication" id="yes" />
              <label className={styles.label} htmlFor="yes">
                Yes
              </label>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="medication" id="no" />
              <label className={styles.label} htmlFor="no">
                No
              </label>
            </div>
          </div>
          {/* third section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.p}>Pregnancy(for woman)</p>
              <p className={styles.p}>Are you pregnant or nursing?</p>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="pregnancy" id="yes" />
              <label className={styles.label} htmlFor="yes">
                Yes
              </label>
            </div>
            <div className={styles.radioBtnWrapper}>
              <input type="radio" name="pregnancy" id="no" />
              <label className={styles.label} htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.uploadContainer}>
          <p className={styles.p}>Upload your medical report</p>
          <p className={styles.p}>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <button className={styles.btnAddFile}>Add file</button>
        </div>
      </div>
      <button className={styles.btn}>Submit</button>
    </div>
  );
}
