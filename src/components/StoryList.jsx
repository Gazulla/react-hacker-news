import { useStories } from "../hooks/useStories";
import Loading from "./Loading";
import Story from "./Story";

export default function StoryList() {
  const { loading, list, numHits } = useStories();

  if (loading) {
    return <Loading />;
  }

  if (numHits === 0) {
    return <div className="flex justify-center"> No stories found</div>;
  }

  return (
    <ul data-testid="story-list" className="border-t border-neutral-600 mb-4">
      {list.map((story) => {
        return <Story key={story.id} story={story} />;
      })}
    </ul>
  );
}
