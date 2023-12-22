import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: `${USER_URL}/all-users`,
        method: "GET",
      }),
    }),
    getUserById: build.query({
      query: (id: string) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
    }),
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `${USER_URL}/${id}`,
        method: "PUT",
        data: { data },
      }),
    }),
    deleteUser: build.mutation({
      query: (id: string) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
