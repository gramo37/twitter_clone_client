import Newsitem from "./Newsitem";

export default function Newsfeed(props: any) {
  const { newsData } = props;
  return (
    <div className="bg-gray-100 p-2 rounded-lg shadow-md w-fit m-2">
      <h1 className="text-2xl font-bold mb-4">Whats Happening</h1>
      {newsData.map((news: any, index: any) => {
        return <Newsitem key={index} {...news} />;
      })}
      <button
        // onClick={toggleShowMore}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Show More
      </button>
    </div>
  );
}
