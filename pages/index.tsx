import Leftbar from "@/components/Leftbar";
import Midbar from "@/components/Midbar";
import Rightbar from "@/components/Rightbar";
import { useGetUserDetails } from "@/hooks/user";

export default function Home() {
  const {user} = useGetUserDetails();
  return (
    <div className="grid grid-cols-12 w-full m-auto mt-1">
      <div className="mx-1 my-2 col-span-2"><Leftbar user={user}/></div>
      <div className="border border-r-gray-200 border-y-0 border-l-0 mx-2 my-2 col-span-7"><Midbar /></div>
      <div className="mx-1 my-2 col-span-3 w-fit"><Rightbar user={user}/></div>
    </div>
  );
}
