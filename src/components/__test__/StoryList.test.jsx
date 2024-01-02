import { it, describe, afterEach, vi, expect } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import StoryList from "../StoryList";
import { storyList } from "./mocks";
import * as useStoriesHooks from "../../hooks/useStories";

describe("Story list tests", () => {
  const useStoriesSpy = vi.spyOn(useStoriesHooks, "useStories");
  afterEach(() => {
    cleanup();
    useStoriesSpy.mockClear();
  });

  it("should render", () => {
    useStoriesSpy.mockReturnValue({
      loading: false,
      list: storyList,
      numHits: 1203,
    });
    render(<StoryList />);
  });

  it("should display 20 stories per page", () => {
    useStoriesSpy.mockReturnValue({
      loading: false,
      list: storyList,
      numHits: 1203,
    });
    render(<StoryList />);
    expect(screen.getByTestId("story-list").children.length).toBe(20);
  });
});
