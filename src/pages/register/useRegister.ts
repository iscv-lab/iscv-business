import { ethers } from 'ethers'

import { FormikData } from './types'


import { useBusiness } from '@contracts/useBusiness'
import { postImage } from '@apis/common/image'

export const useRegister = async (
  values: FormikData,
  signer: ethers.providers.JsonRpcSigner,
) => {
  const df = new FormData()
  df.append('image', values.avatar)
  const imageSource = await postImage(df).then((success: any) => success.data)
  const businessContract = useBusiness(signer)
  return await businessContract.addBusiness(
    values.fullname,
    values.phone,
    values.professional,
    values.email,
    values.github,
    values.linkedin,
    imageSource
  )
}
