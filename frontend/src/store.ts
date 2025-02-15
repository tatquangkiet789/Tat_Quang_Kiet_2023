import { configureStore } from '@reduxjs/toolkit';
import postSlice from './features/posts/postSlice';
import commentSlice from './features/comments/commentSlice';
import searchSlice from './features/search/searchSlice';

export const store = configureStore({
    reducer: {
        posts: postSlice,
        comments: commentSlice,
        search: searchSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
