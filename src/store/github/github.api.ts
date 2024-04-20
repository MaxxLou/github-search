import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IRepo, IOwner, ServerResponse } from "../../models/models"

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/"
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchUsers: build.query<IOwner[], string>({
      query: (search: string) => ({
        url: "search/users",
        params: {
          q: search,
          per_page: 10
        }
      }),
      transformResponse: (response: ServerResponse<IOwner>) => response.items
    }),
    getUserRepos: build.query<IRepo[], string>({query: (username) => ({
      url: `users/${username}/repos`
    }) })
  })
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi