import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <div className="bg-gray-100 p-0 m-2 mt-3 rounded-full flex items-center relative">
      <SearchIcon className="text-gray-400 ml-2 border-none outline-none absolute" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-3 bg-gray-100 border rounded-full pl-9"
      />
    </div>
  );
}
