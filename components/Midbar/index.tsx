import Tweet from "./Tweet";

// Will be fetched from the API
const tweets = [
  {
    id: "1",
    profileName: "Prasanna",
    timestamp: "1h",
    content: "Hello World",
  },
  {
    id: "2",
    profileName: "Prasanna",
    timestamp: "1h",
    content: "Hello World",
  },
  {
    id: "3",
    profileName: "Prasanna",
    timestamp: "1h",
    content: "Hello World",
  },
  {
    id: "4",
    profileName: "Prasanna",
    timestamp: "1h",
    content: "Hello World",
  },
  {
    id: "5",
    profileName: "Prasanna",
    timestamp: "1h",
    content: "Hello World",
  },
];

export default function Midbar() {
  return (
    <div className="">
      {/* Tweet Input */}
      <div className="flex m-2 sticky top-4 pb-3 mt-4" >
        <input
          type="text"
          placeholder="What is happening!!"
          className="px-4 py-2 border rounded-l-md w-full"
        />
        <button
          // onClick={onButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Tweet
        </button>
      </div>
      {/* All Tweets */}
      {tweets.map((item) => {
        return <Tweet key={item?.id} {...item} />;
      })}
    </div>
  );
}
