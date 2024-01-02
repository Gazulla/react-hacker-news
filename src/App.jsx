import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setStoryList } from "./actions/storyActions";
import Header from "./components/header";
import StoryList from "./components/StoryList";
import PaginationBar from "./components/PaginationBar";

export default function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setStoryList());
  });

  return (
    <div className="w-full max-w-5xl px-3 mb-10">
      <Header />
      <main>
        <PaginationBar />
        <StoryList />
        <PaginationBar />
      </main>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
