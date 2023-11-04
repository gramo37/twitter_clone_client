import { userClient } from "@/clients/api";
import {
  getUserDetailsQuery,
  verifyGoogleTokenQuery,
} from "@/graphql/query/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useGetUserDetails = () => {
  const query: any = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => {
      return userClient.request(getUserDetailsQuery);
    },
  });

  return { ...query, user: query?.data?.getUserInfo };
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload: any) => {
      console.log(payload);
      return (await userClient.request(verifyGoogleTokenQuery, {
        token: payload.googleToken,
      })) as any;
    },
    onSuccess: async (data) => {
      console.log(data);
      window.localStorage.setItem("__twitter_clone", data.verifyGoogleToken);
      toast("Login Successful!");
      // Update the common user profile request
      await queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
    onError: () => {
      toast.error("Google Token not found!");
    },
  });

  return mutation;
};
