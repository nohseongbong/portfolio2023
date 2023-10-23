import { useProjectDetail } from "@/hooks/useProjectDetail";
import styles from "@/styles/page/projectDetail.module.css";

const ProjectDetailContainer = () => {
  const { data } = useProjectDetail();
  console.log(data, ": data");
  return (
    <div className={styles.about_container}>
      <></>
    </div>
  );
};

export default ProjectDetailContainer;
