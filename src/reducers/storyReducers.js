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

export const storyListReducer = (state = { list: [], query: "", page: 0 }, action) => {
  switch (action.type) {
    case SET_STORY_LIST_REQUEST:
    case SEARCH_STORIES_REQUEST:
    case PREVIUOS_PAGE_REQUEST:
    case NEXT_PAGE_REQUEST:
      return { ...state, loading: true };

    case SET_STORY_LIST_SUCCESS:
    case SEARCH_STORIES_SUCCESS:
    case PREVIUOS_PAGE_SUCCESS:
    case NEXT_PAGE_SUCCESS:
      return { loading: false, ...action.payload };

    case SET_STORY_LIST_FAIL:
    case SEARCH_STORIES_FAIL:
    case PREVIOUS_PAGE_FAIL:
    case NEXT_PAGE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
