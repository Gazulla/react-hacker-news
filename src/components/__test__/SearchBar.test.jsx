import { it, describe, afterEach, vi, expect } from "vitest";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";
import * as useStoriesHooks from "../../hooks/useStories";

describe("Search bar tests", () => {
  const useStoriesSpy = vi.spyOn(useStoriesHooks, "useStories");
  afterEach(() => {
    cleanup();
    useStoriesSpy.mockClear();
  });

  it("should render", () => {
    const mockedDebouncedSearchStories = vi.fn();
    useStoriesSpy.mockReturnValue({
      debouncedSearchStories: mockedDebouncedSearchStories,
    });
    render(<SearchBar />);
  });

  it("should call the hook that fetch stories on input change", () => {
    const mockedDebouncedSearchStories = vi.fn();
    useStoriesSpy.mockReturnValue({
      debouncedSearchStories: mockedDebouncedSearchStories,
    });
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText("Search stories...");
    fireEvent.change(searchInput, { target: { value: "a" } });
    fireEvent.change(searchInput, { target: { value: "b" } });
    expect(mockedDebouncedSearchStories).toHaveBeenCalledTimes(2);
  });
});
