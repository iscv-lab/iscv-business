import { ethers } from "ethers";
import { BusinessController__factory } from './../typechain/factories/controller/business/BusinessController__factory';

export const useBusiness = async (signer: ethers.providers.JsonRpcSigner) => {
  return BusinessController__factory.connect(
    "0x21dF544947ba3E8b3c32561399E88B52Dc8b2823",
    signer
  );
};
