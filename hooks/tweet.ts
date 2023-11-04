import { userClient } from "@/clients/api";
import { createTweet } from "@/graphql/mutations/tweet";
import { getAllTweetsQuery } from "@/graphql/query/tweet";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAllTweets = () => {
  const query: any = useQuery({
    queryKey: ["allTweets"],
    queryFn: () => userClient.request(getAllTweetsQuery),
  });

  return { ...query, tweets: query?.data?.getAllTweets };
};

export const useCreateTweet = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload: any) => userClient.request(createTweet, { payload }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["allTweets"] }),
  });

  return mutation;
};
