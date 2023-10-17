import SwiperMain from "@/components/swiper/SwiperMain";
import { useTodos } from "@/hooks/useProjects";

const Maincontainer = () => {
  const { projects } = useTodos();
  return (
    <div className="w-screen h-full bg-pink">
      <SwiperMain projects={projects} />
    </div>
  );
};

export default Maincontainer;
