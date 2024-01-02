import { it, describe, afterEach } from "vitest";
import Story from "../Story";
import { screen, render, cleanup } from "@testing-library/react";
import { storyList } from "./mocks";

describe("Story tests", () => {
  afterEach(cleanup);

  it("should render story data", () => {
    render(<Story story={storyList[0]} />);
    screen.getByText("Explore over 80K reports of UFO sightings around the world");
    screen.getByText("antineutrino");
  });

  it("should display comments correctly", () => {
    render(<Story story={storyList[0]} />);
    screen.getByText("0 comments");
  });

  it("should format story date correctly", () => {
    render(<Story story={storyList[0]} />);
    screen.getByText("02/01/2024 at 17:01");
  });
});
