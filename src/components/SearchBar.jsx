import { useStories } from "../hooks/useStories";

export default function SearchBar() {
  const { debouncedSearchStories } = useStories();
  const handleSearchChange = (query) => {
    debouncedSearchStories(query);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full h-12 pl-5 bg-zinc-900 rounded-2xl justify-end items-center gap-4 inline-flex">
      <img className="w-5 h-5" src="/search.svg" alt="Search" />
      <input
        className="text-white text-opacity-90 text-base font-normal bg-transparent w-full pr-4"
        placeholder="Search stories..."
        type="search"
        onChange={(e) => handleSearchChange(e.target.value)}
      ></input>
    </form>
  );
}
