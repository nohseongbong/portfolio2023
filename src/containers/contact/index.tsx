import styles from "@/styles/page/contact.module.css";
import Image from "next/image";
import Link from "next/link";

const ContactContainer = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.content_top_wrap}>
        <div className={styles.content_top}>
          <Image className={styles.icon} src={"/images/contact/naver.png"} width={100} height={100} alt="네이버" />
          <span>shtjdqhd@naver.com</span>
        </div>
        <div className={styles.content_top}>
          <Image className={styles.icon} src={"/images/contact/tel.png"} width={100} height={100} alt="연락처" />
          <span>010-5067-4188</span>
        </div>
      </div>
      <div className={styles.content_top_wrap}>
        <Link target="_blank" href="https://github.com/nohseongbong/">
          <Image className={styles.icon} src={"/images/contact/github.png"} width={100} height={100} alt="연락처" />
        </Link>
        <Link target="_blank" href="https://open.kakao.com/o/sJgJuuQd">
          <Image className={styles.icon} src={"/images/contact/kakao.png"} width={100} height={100} alt="연락처" />
        </Link>
      </div>
    </div>
  );
};

export default ContactContainer;
