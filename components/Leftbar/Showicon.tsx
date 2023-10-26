type TShowIcon = {
  title?: any;
  Icon?: any;
};

export default function Showicon(props: TShowIcon) {
  const { title, Icon } = props || {};
  return <div className="flex justify-center items-center m-2 py-2 px-3 hover:bg-gray-200 rounded-full cursor-pointer transition-all">
    <span className="text-lg mr-2">{title || "Loading..."}</span>
    {Icon && <Icon sx={{ fontSize: "2rem" }}/>}
  </div>;
}
