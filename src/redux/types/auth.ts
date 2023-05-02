import { ethers } from 'ethers'
import { NavigateFunction } from 'react-router-dom'

export type IConnectData = {
  account: string | undefined
  signer?: ethers.providers.JsonRpcSigner | undefined
  navigate: NavigateFunction
  business?: any
}

export type ILoginData = {
  account: string | undefined
  signer: ethers.providers.JsonRpcSigner | undefined
}

// export type ISignOutData = {

// }
// export interface IRegisterData {
//   user: User;
//   accessToken: string;
//   refreshToken: string;
// }

// export interface IAutoData {
//   user: User;
//   accessToken: string;
//   refreshToken: string;
// }

// export interface User {
//   username: string;
//   email: string;
//   _id: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }
