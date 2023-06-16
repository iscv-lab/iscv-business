import { ethers } from 'ethers'
import { BusinessController__factory } from './../typechain/factories/controller/business/BusinessController__factory'

export const useBusiness = (signer: ethers.providers.JsonRpcSigner) => {
  return BusinessController__factory.connect('0x5F30D61F1C1BFb1d8EcCa8c7fD2d5D21A9819bb3', signer)
}
