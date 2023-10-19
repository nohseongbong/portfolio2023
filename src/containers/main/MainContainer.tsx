import SwiperMain from "@/components/swiper/SwiperMain";
import { useProjects } from "@/hooks/useProjects";
import styles from "@/styles/page/main.module.css";

const MainContainer = () => {
  const { projects } = useProjects();
  console.log(projects, ":projects");
  return (
    <div className={styles.main_container}>
      <SwiperMain projects={projects} />
    </div>
  );
};

export default MainContainer;
