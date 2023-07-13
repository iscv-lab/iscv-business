import { ethers } from 'ethers'
import { BusinessController__factory } from './../typechain/factories/controller/business/BusinessController__factory'

export const useBusiness = (signer: ethers.providers.JsonRpcSigner) => {
  return BusinessController__factory.connect('0x96aeAD15bf2f83f305582Da2730709FDE1BD5328', signer)
}
