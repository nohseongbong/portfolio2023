import { User } from "@/types/user";
import { axiosInstance } from "../config";

type UserResType = User;
/**
 *  내정보 불러오기 API
 */
export const getUser = async () => {
  const { data } = await axiosInstance.get<UserResType>("user");
  return data;
};
