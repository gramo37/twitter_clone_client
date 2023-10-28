import { userClient } from "@/clients/api";
import Newsfeed from "./Newsfeed";
import SearchBar from "./SearchBar";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { verifyGoogleTokenQuery } from "@/graphql/query/user";
import { useQueryClient } from "@tanstack/react-query";

const newsData = [
  {
    title: "Breaking News 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Tech Update",
    description: "A new technological advancement is on the horizon.",
  },
  {
    title: "World Politics",
    description: "Major international developments that you need to know.",
  },
];

export default function Rightbar(props: any) {
  const {user} = props;
  const queryClient = useQueryClient();
  const handleLogin = async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    // Send cred.credential to the backend and get a token
    const { verifyGoogleToken }: any = await userClient.request(
      verifyGoogleTokenQuery,
      { token: googleToken }
    );
    if (!verifyGoogleToken) return toast.error("Google Token not found!");
    // Store the token in localStorage
    window.localStorage.setItem("__twitter_clone", verifyGoogleToken);
    toast("Login Successful!");
    // Update the common user profile request
    await queryClient.invalidateQueries({ queryKey: ["currentUser"] });
  };
  return (
    <div className="sticky top-0 border border-transparent">
      <SearchBar />
      {!user && <GoogleLogin
        onSuccess={handleLogin}
        onError={() => {
          console.log("Login Failed");
        }}
      />}
      <Newsfeed newsData={newsData} />
    </div>
  );
}
