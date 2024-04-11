import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const currentDate = new Date().toISOString().split('T')[0]; 

const nextMonthDate = new Date();
nextMonthDate.setMonth(nextMonthDate.getMonth() + 5);
const nextMonth = nextMonthDate.toISOString().split('T')[0];

//createApi fra RTK Query til defination af endpoints 
const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: 'e46278258cc52ec12ec6d0d0582c89b7'
            },
            method: 'GET',
          };
        },
      }),

      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: 'e46278258cc52ec12ec6d0d0582c89b7'
            },
            method: 'GET',
          };
        },
      }),
      
      fetchUpcomingMovies: builder.query({
        query: () => ({
          url: 'discover/movie',
          params: {
            'primary_release_date.gte': currentDate,
            'primary_release_date.lte': nextMonth,
            sort_by: 'primary_release_date.asc',

           api_key: 'e46278258cc52ec12ec6d0d0582c89b7'
          },
          method: 'GET',
        }),
      }),

      fetchPopularTvShows: builder.query({
        query: () => {
          return {
            url: 'discover/tv',
            params: {
              sort_by: 'popularity.desc',
              api_key: 'e46278258cc52ec12ec6d0d0582c89b7'
            },
            method: 'GET',
          };
        },
      }),

      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: 'e46278258cc52ec12ec6d0d0582c89b7'
            },
            method: 'GET',
          };
        },
      }),  

    };
  },
});

//Export hooks til andre komponenter
export const {useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchUpcomingMoviesQuery, useFetchPopularTvShowsQuery, useFetchSearchMovieQuery} = moviesApi;
export { moviesApi };