import { userClient } from "@/clients/api";
import { getUserDetailsQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const useGetUserDetails = () => {
  const query: any = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => {
      return userClient.request(getUserDetailsQuery);
    },
  });

  return {...query, user: query?.data?.getUserInfo }
};
