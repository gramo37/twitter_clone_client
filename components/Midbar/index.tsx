import { useCreateTweet, useGetAllTweets } from "@/hooks/tweet";
import Tweet from "./Tweet";
import ImageIcon from "@mui/icons-material/Image";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// Will be fetched from the API

export default function Midbar() {
  const { mutate, isIdle } = useCreateTweet();
  const { tweets, isLoading } = useGetAllTweets();
  const [content, setContent] = useState("");

  const handleImageInput = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  };

  useEffect(() => {
    if(isIdle) return;
    const id = toast.loading("Creating Tweet...");
    toast.update(id, {
      render: "Successfully created a tweet!!",
      type: "success",
      isLoading: false,
      autoClose: 3000
    });
  }, [isIdle]);

  const createNewTweet = () => {
    console.log(content);
    mutate({
      content,
    });
  };

  if (!tweets || isLoading) return <h2>Loading...</h2>;

  return (
    <div className="">
      {/* Tweet Input */}
      <div className="flex m-2 sticky top-4 pb-3 mt-4">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="What is happening!!"
          className="px-4 py-2 border rounded-l-md w-full"
        />
        <div
          onClick={handleImageInput}
          className="flex justify-center items-center cursor-pointer m-1"
        >
          <ImageIcon />
        </div>
        <button
          onClick={createNewTweet}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Tweet
        </button>
      </div>
      {/* All Tweets */}
      {tweets.map((item: any) => {
        return <Tweet key={item?.id} {...item} />;
      })}
    </div>
  );
}
