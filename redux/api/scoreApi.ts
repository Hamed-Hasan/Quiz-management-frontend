import { baseApi } from "./baseApi";

const SCORE_URL = "/scores";

export const scoreApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    viewUserScores: build.query({
      query: (userId: string) => ({
        url: `${SCORE_URL}/${userId}`,
        method: "GET", 
      }),
    }),
    getLeaderboard: build.query({
      query: (category: string) => ({
        url: `${SCORE_URL}/leaderboard/${category}`,
        method: "GET", 
      }),
    }),
  }),
});

export const {
  useViewUserScoresQuery,
  useGetLeaderboardQuery,
} = scoreApi;
