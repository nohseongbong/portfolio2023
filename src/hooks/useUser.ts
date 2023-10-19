import { getUser } from "@/apis/user/user";
import { QUERY_KEYS } from "@/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const { data } = useQuery({ queryKey: [QUERY_KEYS.USER], queryFn: getUser, refetchOnWindowFocus: false });

  return { user: data };
};
