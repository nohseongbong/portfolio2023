import styles from "@/styles/component/header.module.css";

import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header_wrap}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <Link legacyBehavior href="/">
            <a className={styles.nav_list_item_text}>Works</a>
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link legacyBehavior href="/about">
            <a className={styles.nav_list_item_text}>About</a>
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link legacyBehavior href="/contact">
            <a className={styles.nav_list_item_text}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
