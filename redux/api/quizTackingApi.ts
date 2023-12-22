import { baseApi } from "./baseApi";
const QUIZ_URL = "/quizzesTack"; 

export const quizApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    startQuiz: build.query({
      query: (quizId: string) => ({
        url: `${QUIZ_URL}/${quizId}/start`,
        method: "GET",
      }),
    }),
    submitAnswer: build.mutation({
      query: (payload) => ({
        url: `${QUIZ_URL}/${payload.quizId}/submit`,
        method: "POST",
        data: payload,
      }),
    }),
  }),
});

export const { 
    useStartQuizQuery, 
    useSubmitAnswerMutation 
} = quizApi;
