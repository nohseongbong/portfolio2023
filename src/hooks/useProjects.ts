import { getProjects } from "@/apis/projects/projects";
import { QUERY_KEYS } from "@/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export const useProjects = () => {
  const { data } = useQuery({ queryKey: [QUERY_KEYS.PROJECTS], queryFn: getProjects, refetchOnWindowFocus: false });

  return { projects: data ?? [] };
};
