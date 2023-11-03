import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Showicon from "./Showicon";

type leftbaricon = {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};

const leftbaricons: leftbaricon[] = [
  {
    title: "Home",
    Icon: HomeIcon,
  },
  {
    title: "Notifications",
    Icon: NotificationsIcon,
  },
  {
    title: "Search",
    Icon: SearchIcon,
  },
  {
    title: "Messages",
    Icon: ForumIcon,
  },
  {
    title: "List",
    Icon: FormatListBulletedIcon,
  },
  {
    title: "Commuities",
    Icon: PeopleIcon,
  },
  {
    title: "Premium",
    Icon: WorkspacePremiumIcon,
  },
  {
    title: "Profile",
    Icon: AccountCircleIcon,
  },
  {
    title: "More",
    Icon: MoreVertIcon,
  },
];

export default function Leftbar(props: any) {
  const {user} = props;
  return (
    <div className="flex items-end flex-col sticky top-0">
      {user && <div>Hello {user.firstName}</div>}
      {leftbaricons.map((item, index) => {
        return <Showicon key={index} {...item} />;
      })}
    </div>
  );
}
