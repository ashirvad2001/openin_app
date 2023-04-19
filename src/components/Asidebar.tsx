import { signOut } from "next-auth/react";
import styles from "../styles/Asidebar.module.css";
import Image from "next/image";

const Asidebar = () => {
  return (
    <aside className={styles.aside_wrapper}>
      <div className={styles.aside_container}>
        <div className={styles.aside_top}>
          <h1 className={styles.aside_branding}>Board.</h1>
        </div>
        <ul className={styles.aside_middle}>
          <div className={styles.middle_flex}>
            <Image
              src="/img/pie-chart-24.png"
              alt="pie-chart"
              width={24}
              height={24}
              className={styles.middle_img}
            />
            <li className={styles.middle_text}>Dashboard</li>
          </div>
          <div className={styles.middle_flex}>
            <Image
              src="/img/wallet-24.png"
              alt="wallet"
              width={24}
              height={24}
              className={styles.middle_img}
            />
            <li className={styles.middle_text}>Transactions</li>
          </div>
          <div className={styles.middle_flex}>
            <Image
              src="/img/schedule-24.png"
              alt="schedule"
              width={24}
              height={24}
              className={styles.middle_img}
            />
            <li className={styles.middle_text}>Schedules</li>
          </div>
          <div className={styles.middle_flex}>
            <Image
              src="/img/users-24.png"
              alt="users"
              width={24}
              height={24}
              className={styles.middle_img}
            />
            <li className={styles.middle_text}>Users</li>
          </div>
          <div className={styles.middle_flex}>
            <Image
              src="/img/settings-24.png"
              alt="settings"
              width={24}
              height={24}
              className={styles.middle_img}
            />
            <li className={styles.middle_text}>Settings</li>
          </div>
        </ul>
        <div className={styles.aside_bottom}>
          <span className={styles.bottom_text}>Help</span>
          {/******* USER_LOGOUT ******/}
          <button
            type="button"
            onClick={() => signOut()}
            className={styles.bottom_logout_btn}
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Asidebar;
