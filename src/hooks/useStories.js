import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage, searchStories } from "../actions/storyActions";
import { useCallback } from "react";
import debounce from "just-debounce-it";

export function useStories() {
  const { loading, page, numHits, numPages, list } = useSelector((state) => state.storyList);
  const dispatch = useDispatch();

  const isFirstPage = page === 0;
  const isLastPage = page === numPages - 1;

  const previous = () => {
    dispatch(previousPage());
  };

  const next = () => {
    dispatch(nextPage());
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearchStories = useCallback(
    debounce((query) => dispatch(searchStories(query)), 600),
    []
  );

  return { loading, page, numHits, list, isFirstPage, isLastPage, previous, next, debouncedSearchStories };
}
