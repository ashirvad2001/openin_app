import styles from "../../styles/Authentication.module.css";
import Image from "next/image";

const Authentication = () => {
  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.auth_container_01}>
        <h1 className={styles.auth_branding}>Board.</h1>
      </div>
      <div className={styles.auth_container_02}>
        <div className={styles.auth_providers}>
          <h1 className={styles.auth_heading}>Sign In</h1>
          <p className={styles.auth_lead}>
            Quickly get started by signing in using your existing accounts.
          </p>
          {/****** GOOGLE_PROVIDER *******/}
          <button className={styles.auth_btn}>
            <Image
              src="/img/google-28.png"
              alt="google"
              width={28}
              height={28}
              className={styles.auth_btn_img}
            />
            <span className={styles.auth_btn_text}>Sign in with Google</span>
          </button>
          {/****** FACEBOOK_PROVIDER *******/}
          <button className={styles.auth_btn}>
            <Image
              src="/img/facebook-28.png"
              alt="facebook"
              width={28}
              height={28}
              className={styles.auth_btn_img}
            />
            <span className={styles.auth_btn_text}>Sign in with Facebook</span>
          </button>
          {/****** INSTAGRAM_PROVIDER *******/}
          <button className={styles.auth_btn}>
            <Image
              src="/img/instagram-28.png"
              alt="instagram"
              width={28}
              height={28}
              className={styles.auth_btn_img}
            />
            <span className={styles.auth_btn_text}>Sign in with Instagram</span>
          </button>
          <p className={styles.auth_policy}>
            By proceeding, you are agreeing to board. Terms of Service and
            Privacy Notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
