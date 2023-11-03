import Image from "next/image";

type TTweet = {
  author?: any;
  content?: any;
  imageURL?: any;
};

export default function Tweet(props: TTweet) {
  const { author, content, imageURL } = props || {};
  const { firstName, profileImageURL } = author || {};
  return (
    <div className="border p-4 m-2 rounded-md shadow-md bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src={profileImageURL} 
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
            width={100}
            height={100}
          />
          <div className="ml-3">
            <div className="text-xl font-semibold">
              {firstName || "Loading..."}
            </div>
            <div className="text-gray-500 text-sm">{"1h"}</div>
          </div>
        </div>
      </div>

      <div className="text-lg">
        {content || "Loading, kindly wait ..."}
        {imageURL && <Image
            src={imageURL} 
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
            width={100}
            height={100}
          />}
      </div>

      <div className="mt-4 flex justify-between">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Add icon for commenting */}
            </svg>
            <span>Comment</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Add icon for liking */}
            </svg>
            <span>Like</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Add icon for retweeting */}
            </svg>
            <span>Retweet</span>
          </button>
        </div>

        <div>
          <button className="flex items-center space-x-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Add icon for sharing */}
            </svg>
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
