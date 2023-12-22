import { baseApi } from "./baseApi";
const PROFILE_URL = "/profiles";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfiles: build.query({
      query: () => ({
        url: `${PROFILE_URL}/all-profile`,
        method: "GET",
      }),
    }),
    getProfile: build.query({
      query: (userId: string) => ({
        url: `${PROFILE_URL}/specific-profile/${userId}`,
        method: "GET",
      }),
    }),
    updateProfile: build.mutation({
      query: ({ userId, payload }) => ({
        url: `${PROFILE_URL}/update-profile/${userId}`,
        method: "PATCH",
        data: payload,
      }),
    }),
    deleteProfile: build.mutation({
      query: (userId: string) => ({
        url: `${PROFILE_URL}/delete-profile/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProfilesQuery,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useDeleteProfileMutation,
} = profileApi;
