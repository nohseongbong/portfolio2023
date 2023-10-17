import SwiperMain from "@/components/swiper/SwiperMain";
import { useTodos } from "@/hooks/useProjects";
import styles from "@/styles/page/main.module.css";

const Maincontainer = () => {
  const { projects } = useTodos();
  console.log(projects, ":projects");
  return (
    <div className={styles.main_container}>
      <SwiperMain projects={projects} />
    </div>
  );
};

export default Maincontainer;
