import { toast } from "react-toastify";
import {
  SET_STORY_LIST_REQUEST,
  SET_STORY_LIST_SUCCESS,
  SET_STORY_LIST_FAIL,
  SEARCH_STORIES_REQUEST,
  SEARCH_STORIES_SUCCESS,
  SEARCH_STORIES_FAIL,
  PREVIUOS_PAGE_REQUEST,
  PREVIUOS_PAGE_SUCCESS,
  PREVIOUS_PAGE_FAIL,
  NEXT_PAGE_REQUEST,
  NEXT_PAGE_SUCCESS,
  NEXT_PAGE_FAIL,
} from "../constants/storyConstants";

import { fetchHackerNewsStories } from "../services/hackerNewsAPI";

export const setStoryList = () => async (dispatch) => {
  try {
    dispatch({ type: SET_STORY_LIST_REQUEST });
    const stories = await fetchHackerNewsStories();
    dispatch({ type: SET_STORY_LIST_SUCCESS, payload: stories });
  } catch (error) {
    dispatch({ type: SET_STORY_LIST_FAIL, payload: error.message });
    toast.error("Unable to set Hacker News story list");
  }
};

export const searchStories = (query) => async (dispatch, getState) => {
  try {
    const oldQuery = getState().storyList.query;
    if (oldQuery === query) {
      return;
    }
    dispatch({ type: SEARCH_STORIES_REQUEST });
    const stories = await fetchHackerNewsStories(query);
    dispatch({ type: SEARCH_STORIES_SUCCESS, payload: stories });
  } catch (error) {
    dispatch({ type: SEARCH_STORIES_FAIL, payload: error.message });
    toast.error("Unable to search Hacker News stories");
  }
};

export const previousPage = () => async (dispatch, getState) => {
  try {
    const page = getState().storyList.page - 1;
    if (page < 0) {
      return;
    }
    const query = getState().storyList.query;
    dispatch({ type: PREVIUOS_PAGE_REQUEST });
    const stories = await fetchHackerNewsStories(query, page);
    dispatch({ type: PREVIUOS_PAGE_SUCCESS, payload: stories });
  } catch (error) {
    dispatch({ type: PREVIOUS_PAGE_FAIL, payload: error.message });
    toast.error("Unable to get previous page stories");
  }
};

export const nextPage = () => async (dispatch, getState) => {
  try {
    const page = getState().storyList.page + 1;
    const lastPage = getState().storyList.numPages - 1;
    if (page > lastPage) {
      return;
    }
    const query = getState().storyList.query;
    dispatch({ type: NEXT_PAGE_REQUEST });
    const stories = await fetchHackerNewsStories(query, page);

    dispatch({ type: NEXT_PAGE_SUCCESS, payload: stories });
  } catch (error) {
    dispatch({ type: NEXT_PAGE_FAIL, payload: error.message });
    toast.error("Unable to get next page stories");
  }
};
