import Newsfeed from "./Newsfeed";
import SearchBar from "./SearchBar";

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
  return (
    <div className="sticky top-0 border border-transparent">
      <SearchBar />
      <Newsfeed newsData={newsData}/>
    </div>
  );
}
