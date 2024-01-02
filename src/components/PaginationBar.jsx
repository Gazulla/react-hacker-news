import { useStories } from "../hooks/useStories";

export default function PaginationBar() {
  const { loading, page, numHits, numPages, isFirstPage, isLastPage, previous, next } = useStories();

  if (loading || numHits <= 20 || numPages === 0) {
    return <></>;
  }

  return (
    <>
      <nav className={`flex px-2 text-md text-neutral-200 ${isFirstPage ? "justify-end" : isLastPage ? "justify-start" : "justify-between"}`}>
        {!isFirstPage && (
          <button
            className="flex gap-2 items-center font-semibold border rounded-md py-2 px-4 border-neutral-400 lg:hover:bg-neutral-900"
            onClick={previous}
          >
            <img className="w-4 h-4" src="/arrow_left.svg" alt="left arrow" />
            <div>{"PREVIOUS"}</div>
          </button>
        )}
        {!isLastPage && (
          <button
            className="flex gap-2 items-center font-semibold border rounded-md py-2 px-4 border-neutral-400 lg:hover:bg-neutral-900"
            onClick={next}
          >
            <div>{"NEXT"}</div>
            <img className="w-4 h-4" src="/arrow_right.svg" alt="right arrow" />
          </button>
        )}
      </nav>
      <div className="flex text-[17px] text-neutral-500 justify-center pt-3 pb-4">
        Page: <span className="font-bold text-neutral-400 mx-1">{page + 1}</span> ({numHits} stories)
      </div>
    </>
  );
}
