import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Socket, io } from 'socket.io-client'

import { AppDispatch, RootState, store } from '@redux/store'
import {
  ClientToServerEvents,
  ISocketStore,
  ServerToClientEvents,
  SocketInput,
  SocketOutput
} from '@redux/types/socket'
import { API_ENDPOINT_NODEJS } from '@constants/index'
import { addItem, crawl, newRecent } from './messages'

const initialState: ISocketStore = {
  client: undefined
}

export const setClient = createAsyncThunk<
  SocketOutput,
  SocketInput,
  { dispatch: AppDispatch; state: RootState }
>('socket/setclient', async (data, thunkApi) => {
  const client: Socket<ServerToClientEvents, ClientToServerEvents> = io(API_ENDPOINT_NODEJS, {
    query: { businessId: data.businessId }
  })
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
  thunkApi.dispatch(crawl({ businessId: store.getState().auth.business?.id! }))
  client.on('send', (args) => {
    if (store.getState().messages.current === args.employeeId) {
      thunkApi.dispatch(addItem(args as any))
      thunkApi.dispatch(newRecent({ employeeId: args.employeeId!, updatedAt: new Date() }))
    }
  })
  return { client }
})

export const disconnect = createAsyncThunk<void, void, { dispatch: AppDispatch; state: RootState }>(
  'socket/disconnect',
  async () => {
    return
  }
)

export const socketSlice = createSlice({
  initialState: initialState,
  name: 'socket',
  reducers: {
    resetSocket: () => initialState
  },
  extraReducers(builder) {
    builder.addCase(setClient.fulfilled, (state, action) => {
      state.client = action.payload.client as any
    })
    builder.addCase(disconnect.fulfilled, (state) => {
      state.client?.disconnect()
      state.client = undefined
    })
  }
})
export const { resetSocket } = socketSlice.actions
export default socketSlice.reducer
