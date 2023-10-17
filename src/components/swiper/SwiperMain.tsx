import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
      className="bg-red-600 w-full h-full"
    >
      {projects.map((item, index) => {
        return <SwiperSlide key={index}>{item.name}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default SwiperMain;
