import { userClient } from "@/clients/api";
import { getUserDetailsByIdQuery } from "@/graphql/query/user";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Tweet from "@/components/Midbar/Tweet";

export default function ProfilePage(props: any) {
  const { userInfo } = props;
  if(!userInfo) return <h1>Something went wrong</h1>
  return (
    <>
      <h1>Profile </h1>
      <h3>{userInfo?.firstName}</h3>
      <p>{userInfo?.tweets?.length} Tweets</p>
      <Image
        height={20}
        width={20}
        src={userInfo?.profileImageURL}
        alt="Profile"
      />
      {userInfo?.tweets?.map(
        (tweet: any) => {
          return <Tweet
            key={tweet.id}
            author={tweet?.author}
            content={tweet?.content}
            imageURL={tweet?.imageURL}
          />;
        }
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string | undefined;
  const user: any = await userClient.request(getUserDetailsByIdQuery, {
    userId: id,
  });
  return {
    props: {
      userInfo: user.getUserInfoById,
    },
  };
};
