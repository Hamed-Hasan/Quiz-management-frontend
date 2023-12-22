import { baseApi } from "./baseApi";

const QUIZ_URL = "/quizzes";

export const quizApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createQuiz: build.mutation({
      query: (quizData) => ({
        url: QUIZ_URL,
        method: "POST",
        data: quizData,
      }),
    }),
    editQuiz: build.mutation({
      query: ({ id, quizData }) => ({
        url: `${QUIZ_URL}/${id}`,
        method: "PUT",
        data: quizData,
      }),
    }),
    deleteQuiz: build.mutation({
      query: (id) => ({
        url: `${QUIZ_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateQuizMutation,
  useEditQuizMutation,
  useDeleteQuizMutation,
} = quizApi;
