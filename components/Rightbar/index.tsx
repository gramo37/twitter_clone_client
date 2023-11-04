import Newsfeed from "./Newsfeed";
import SearchBar from "./SearchBar";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useLoginUser } from "@/hooks/user";

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
  const {mutate} = useLoginUser();
  const handleLogin = async (cred: CredentialResponse) => {
    mutate({
      googleToken: cred.credential,
    });
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
