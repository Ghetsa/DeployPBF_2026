import styles from './navbar.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data }: any = useSession();

  const defaultImage = "/user-default.jpeg";

  return (
    <div className={styles.navbar} data-testid="navbar">

      {/* ✅ Brand langsung tanpa Script */}
      <div className={styles.navbar__brand}>
        MyApp
      </div>

      <div className={styles.navbar__right}>
        {data ? (
          <>
            <div className={styles.navbar__user}>
              <span className={styles.navbar__welcome}>
                Welcome, {data.user?.fullname || "User"}
              </span>

              <Link href="/profile">
                <Image
                  data-testid="user-image"
                  width={40}
                  height={40}
                  src={data.user?.image || defaultImage}
                  alt={data.user?.fullname || "avatar"}
                  className={styles.navbar__user__image}
                />
              </Link>
            </div>

            <button
              data-testid="signout-button"
              className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            data-testid="signin-button"
            className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;