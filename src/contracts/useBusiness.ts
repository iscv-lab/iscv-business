import { ethers } from 'ethers'
import { BusinessController__factory } from './../typechain/factories/controller/business/BusinessController__factory'

export const useBusiness = (signer: ethers.providers.JsonRpcSigner) => {
  return BusinessController__factory.connect('0x2e5a5163D607aBaDeA2378E795690c8001BFBcdC', signer)
}
