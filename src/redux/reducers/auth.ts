import { ethers } from 'ethers'

import { getBusinessByUser } from '@apis/profile'
import { useLoading } from '@components/Loading'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { NavigateFunction } from 'react-router-dom'
import { IBusiness } from 'src/globaltypes'
import { AppDispatch } from '../store'
import { IConnectData } from '../types/auth'
import { RootState } from './../store'

const loading = useLoading()

export type LoginState = {
  provider: ethers.providers.Web3Provider
  signer: ethers.providers.JsonRpcSigner | undefined
  account: string | undefined
  business: IBusiness | undefined
}

const initialState: LoginState = {
  provider: new ethers.providers.Web3Provider(window.ethereum!),
  account: undefined,
  signer: undefined,
  business: undefined
}

type NewType = {
  provider: ethers.providers.Web3Provider
  navigate: NavigateFunction
}

export const connect = createAsyncThunk<
  IConnectData,
  NewType,
  { dispatch: AppDispatch; state: RootState }
>('auth/connect', async ({ provider, navigate }) => {
  loading.open()
  const accounts = await provider
    .send('eth_requestAccounts', [])
    .catch((error) => console.log(error))
  const account = accounts?.at(0)
  // if (!account) {
  //   return { account, navigate }
  // }
  const signer = provider.getSigner(account)
  const business = await getBusinessByUser({ user: account }).then((success) => success.data)

  // if (!business) {
  //   return { account, signer, navigate }
  // }

  return { account, signer, navigate, business }
})

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout: (state) => {
      state.account = undefined
      state.signer = undefined
      state.provider = new ethers.providers.Web3Provider(window.ethereum!)
      state.business = undefined
    }
  },
  extraReducers(builder) {
    // Khi thực hiện login thành công (Promise fulfilled)
    builder
      .addCase(connect.fulfilled, (state, action) => {
        state.account = action.payload.account
        state.signer = action.payload.signer
        state.business = action.payload.business
        loading.close()
      })
      .addCase(connect.rejected, (state, action) => {
        loading.close()
      })
  }
})

// creators are generated for each case reducer function
export const { signout } = authReducer.actions

export default authReducer.reducer
