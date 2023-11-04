import { userClient } from "@/clients/api";
import Leftbar from "@/components/Leftbar";
import Midbar from "@/components/Midbar";
import Rightbar from "@/components/Rightbar";
import { getAllTweetsQuery } from "@/graphql/query/tweet";
import { useGetUserDetails } from "@/hooks/user";
import { GetServerSideProps } from "next";

export default function Home(props: any) {
  const { user } = useGetUserDetails();
  const { tweets } = props;
  return (
    <div className="grid grid-cols-12 w-full m-auto mt-1">
      <div className="mx-1 my-2 col-span-2">
        <Leftbar user={user} />
      </div>
      <div className="border border-r-gray-200 border-y-0 border-l-0 mx-2 my-2 col-span-7">
        <Midbar tweets={tweets} />
      </div>
      <div className="mx-1 my-2 col-span-3 w-fit">
        <Rightbar user={user} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allTweets: any = await userClient.request(getAllTweetsQuery);
  return {
    props: {
      tweets: allTweets.getAllTweets,
    },
  };
};
