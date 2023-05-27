import { ethers } from 'ethers'
import { BusinessController__factory } from './../typechain/factories/controller/business/BusinessController__factory'

export const useBusiness = (signer: ethers.providers.JsonRpcSigner) => {
  return BusinessController__factory.connect('0xcba59fCe6fC90230f343E390b22aD95B759742B5', signer)
}
