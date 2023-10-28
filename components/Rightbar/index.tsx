import { userClient } from "@/graphql/query/user";
import Newsfeed from "./Newsfeed";
import SearchBar from "./SearchBar";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
const { gql } = require('graphql-request');

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

export default function Rightbar() {
  const handleLogin = async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    // Send cred.credential to the backend and get a token
    const {verifyGoogleToken}: any = await userClient.request(gql`
    query verifyGoogleToken($token: String!) {
      verifyGoogleToken(token: $token)
    }`, {token: googleToken})
    if(!verifyGoogleToken) return toast.error("Google Token not found!");
    // Store the token in localStorage
    window.localStorage.setItem("__twitter_clone", verifyGoogleToken);
    toast("Login Successful!")
  }
  return (
    <div className="sticky top-0 border border-transparent">
      <SearchBar />
      <GoogleLogin
        onSuccess={handleLogin}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <Newsfeed newsData={newsData} />
    </div>
  );
}
