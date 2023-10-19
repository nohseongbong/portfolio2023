import Image from "next/image";
import styles from "@/styles/component/userInfo.module.css";
import { User } from "@/types/user";

interface Props {
  user?: User;
}

export default function UserInfo({ user }: Props) {
  return (
    <div className={styles.user_info_wrap}>
      <Image width={400} height={500} alt="내 사진" src={user?.image ?? ""} />
      <ul className={styles.user_info}>
        <li>
          <h2>NAME</h2>
          <span>{user?.name}</span>
        </li>
        <li>
          <h2>AGE</h2>
          <span>{user?.age}</span>
        </li>
        <li>
          <h2>MBTI</h2>
          <span>{user?.mbti}</span>
        </li>
      </ul>
    </div>
  );
}
