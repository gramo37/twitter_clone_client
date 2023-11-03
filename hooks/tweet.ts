import { userClient } from "@/clients/api";
import { createTweet } from "@/graphql/mutations/tweet";
import { getAllTweetsQuery } from "@/graphql/query/tweet";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useGetAllTweets = () => {
  const query: any = useQuery({
    queryKey: ["allTweets"],
    queryFn: () => {
      return userClient.request(getAllTweetsQuery);
    },
  });

  return { ...query, tweets: query?.data?.getAllTweets };
};

export const useCreateTweet = () => {
  const queryClient = useQueryClient();
  let id = 2
  const mutation = useMutation({
    mutationFn: (payload: any) => {
      return userClient.request(createTweet, { payload });
    },
    onSuccess: async (payload: any) => {
      await queryClient.invalidateQueries({ queryKey: ["allTweets"] });
    },
  });

  return mutation;
};
