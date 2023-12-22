import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userRegister: build.mutation({
      query: (registerData) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: registerData,
      }),
    }),
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    refreshToken: build.mutation({
      query: (refreshTokenData) => ({
        url: `${AUTH_URL}/refresh-token`,
        method: "POST",
        data: refreshTokenData,
      }),
    }),
    changePassword: build.mutation({
      query: (changePasswordData) => ({
        url: `${AUTH_URL}/change-password`,
        method: "POST",
        data: changePasswordData,
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useRefreshTokenMutation,
  useChangePasswordMutation,
} = authApi;
