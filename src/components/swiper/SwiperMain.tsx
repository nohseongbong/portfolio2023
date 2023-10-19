import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "@/styles/component/swiper.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Project } from "@/types/project";

interface Props {
  projects: Project[];
}

const SwiperMain = ({ projects }: Props) => {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={styles.swiper_wrap}
    >
      {projects.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={styles.swiper_item} style={{ background: `url(${item.bg_image})` }}>
              <Image className={styles.swiper_item_image} width={1920} height={1080} src={item.banner_image} alt={"test"} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperMain;
