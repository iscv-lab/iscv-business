import { ethers } from 'ethers'

import { FormikData } from './types'

import { useBusiness } from '@contracts/useBusiness'
import { postImage } from '@apis/common/image'
import { NavigateFunction } from 'react-router-dom'
import { connect } from '@redux/reducers/auth'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { Web3Provider } from '@ethersproject/providers'

export const useRegister = async (
  values: FormikData,
  signer: ethers.providers.JsonRpcSigner,
  navigate: NavigateFunction,
  dispatch: Dispatch<AnyAction>,
  provider: Web3Provider
) => {
  const df = new FormData()
  df.append('image', values.avatar)
  const imageSource = await postImage(df).then((success: any) => success.data)
  const businessContract = useBusiness(signer)
  const tx = await businessContract
    .addBusiness(
      values.fullname,
      values.phone,
      values.professional,
      values.email,
      values.github,
      values.linkedin,
      imageSource
    )
    .catch((error) => console.log(error))
  if (!tx) return
  await tx
    .wait()
    .then(() => {
      dispatch<any>(connect({ provider, navigate }))
      navigate('/')
    })
    .catch((error) => console.log(error))
}
