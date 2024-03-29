import { axiosInstance } from "../config";
import { Project } from "@/types/project";

type ProjectsResType = Project[];
/**
 * Project 리스트 불러오기 API
 */
export const getProjects = async () => {
  const { data } = await axiosInstance.get<ProjectsResType>("projects");
  return data ?? [];
};

type ProjectDetailResType = Project;
/**
 * Project detail 불러오기 API
 */
export const projectDetail = async () => {
  const { data } = await axiosInstance.post<ProjectDetailResType>("projectDetail", { id: 0 });
  return data;
};
