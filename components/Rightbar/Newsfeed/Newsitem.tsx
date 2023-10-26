export default function Newsitem(props: { title?: any; description?: any }) {
  const { title, description } = props || {};
  return (
    <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 rounded p-2 mb-4 shadow-sm">
      <h2 className="text-xl font-semibold">{title || "Loading"}</h2>
      <p className="text-gray-700 w-[80%]">{description || "Loading"}</p>
    </div>
  );
}
