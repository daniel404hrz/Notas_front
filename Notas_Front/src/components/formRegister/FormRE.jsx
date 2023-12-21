import styles from "./form.module.css";

export default function FormRE() {
  return (
    <div className={styles.box_container}>
        <form className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className={styles.inputField}
          placeholder=" "
          required
        />
        <label htmlFor="floating_email" className={styles.label}>
          Email address
        </label>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          className={styles.inputField}
          placeholder=" "
          required
        />
        <label htmlFor="floating_password" className={styles.label}>
          Password
        </label>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          className={styles.inputField}
          placeholder=" "
          required
        />
        <label htmlFor="floating_repeat_password" className={styles.label}>
          Confirm password
        </label>
      </div>

      
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className={styles.inputField}
            placeholder=" "
            required
          />
          <label htmlFor="floating_last_name" className={styles.label}>
            Last name
          </label>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            name="floating_last_na"
            id="floating_last_nam"
            className={styles.inputField}
            placeholder=" "
            required
          />
          <label htmlFor="floating_last_nam" className={styles.label}>
            Last name
          </label>
        </div>
    

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
    </div>
    
  );
}
