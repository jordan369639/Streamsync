import { configureStore } from '@reduxjs/toolkit';
import MovieSearch from './MovieSearch';
import LoginLogout from './LoginLogout';

export const store = configureStore({
  reducer: {
    movieSearch: MovieSearch,
    user:LoginLogout,
  },
});
