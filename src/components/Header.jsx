import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <header className="flex flex-col gap-5 w-full my-5">
      <div className="flex gap-3 items-center justify-center">
        <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-md" src="/hn.svg" alt="Hacker News logo" />
        <h1 className="text-xl sm:text-3xl">REACT HACKER NEWS</h1>
      </div>
      <SearchBar />
    </header>
  );
}
