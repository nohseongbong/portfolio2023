import { projectDetail } from "@/apis/projects/projects";
import { QUERY_KEYS } from "@/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export const useProjectDetail = () => {
  const { data } = useQuery({ queryKey: [QUERY_KEYS.PROJECT_DETAIL], queryFn: projectDetail, refetchOnWindowFocus: false });

  return { data };
};
