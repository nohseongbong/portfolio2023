import Skill from "@/components/skill/Skill";
import UserInfo from "@/components/user-info/UserInfo";
import { useUser } from "@/hooks/useUser";
import styles from "@/styles/page/about.module.css";

const AboutContainer = () => {
  const { user } = useUser();
  return (
    <div className={styles.about_container}>
      <UserInfo user={user} />
      <Skill skill={user?.skill} tool={user?.tool} />
    </div>
  );
};

export default AboutContainer;
