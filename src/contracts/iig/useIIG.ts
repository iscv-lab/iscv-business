import { ethers } from 'ethers'
import { IIGController__factory } from '../../typechain/factories/controller/business/iig/IIGController__factory'

export const useIIG = (signer: ethers.providers.JsonRpcSigner) => {
  return IIGController__factory.connect('0x876D84f423E1f54FC8104bcCC14614E9971b604A', signer)
}