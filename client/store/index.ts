import { configureStore } from '@reduxjs/toolkit'
import { authAPI } from './services/authService';

const store = configureStore({
    reducer: {
    [authAPI.reducerPath]: authAPI.reducer
    },
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware().concat(authAPI.middleware)
    }
})
export default store;