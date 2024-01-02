import axios from "axios";

const apiUrl = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

function formatStoryResponse(rawStoryResponse) {
  let formatedStoryResponse = {};
  formatedStoryResponse.page = rawStoryResponse.page;
  formatedStoryResponse.numHits = rawStoryResponse.nbHits;
  formatedStoryResponse.numPages = rawStoryResponse.nbPages;
  formatedStoryResponse.query = rawStoryResponse.query;
  formatedStoryResponse.list = rawStoryResponse.hits.map((hit) => {
    return {
      title: hit.title,
      id: hit.story_id,
      author: hit.author,
      url: hit.url || null,
      createdAt: hit.created_at,
      updatedAt: hit.updated_at,
      numComments: hit.num_comments,
      points: hit.points,
    };
  });
  return formatedStoryResponse;
}

export async function fetchHackerNewsStories(query = "", page = 0) {
  const { data } = await axios.get(`${apiUrl}&query=${query}&page=${page}`, config);
  return formatStoryResponse(data);
}
