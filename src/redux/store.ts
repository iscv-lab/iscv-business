import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import authReducer from './reducers/auth'
import messagesReducer from './reducers/messages'
import socketReducer from './reducers/socket'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    socket: socketReducer,
    messages: messagesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
      // prepend and concat calls can be chained
      .concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
