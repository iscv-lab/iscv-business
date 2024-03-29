/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  IIGController,
  IIGControllerInterface,
} from "../../../../controller/business/iig/IIGController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "listBusinessAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listEmployeeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listIIGLRResultAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listIIGSWResultAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "iigDataAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "iigAccountAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "_checkExistBusinessAccount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_checkExistEmployeeAccount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "employeeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "testDate",
        type: "uint256",
      },
      {
        internalType: "enum IIGShiftTest",
        name: "shiftTest",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "expireDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "listeningScore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "readingScore",
        type: "uint256",
      },
    ],
    name: "addLRResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "employeeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "testDate",
        type: "uint256",
      },
      {
        internalType: "enum IIGShiftTest",
        name: "shiftTest",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "expireDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "speakingScore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "writingScore",
        type: "uint256",
      },
    ],
    name: "addSWResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllIIGLRResult",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "employeeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "testDate",
            type: "uint256",
          },
          {
            internalType: "enum IIGShiftTest",
            name: "shiftTest",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "expireDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "listeningScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "readingScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
        ],
        internalType: "struct IIGLRResult[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllIIGSWResult",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "employeeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "testDate",
            type: "uint256",
          },
          {
            internalType: "enum IIGShiftTest",
            name: "shiftTest",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "expireDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "speakingScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "writingScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
        ],
        internalType: "struct IIGSWResult[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b70380380610b7083398101604081905261002f916100b8565b5060008054336001600160a01b0319918216179091556001805482166001600160a01b03978816179055600280548216958716959095179094556003805485169186169190911790556004805484169285169290921790915560058054909216921691909117905561012c565b80516001600160a01b03811681146100b357600080fd5b919050565b60008060008060008060c087890312156100d157600080fd5b6100da8761009c565b95506100e86020880161009c565b94506100f66040880161009c565b93506101046060880161009c565b92506101126080880161009c565b915061012060a0880161009c565b90509295509295509295565b610a358061013b6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80639712a187116100665780639712a187146100ee578063a7cdca4b14610101578063d610b45a14610116578063ec40a59b1461012e578063f2fde38b1461013657600080fd5b80630b118ce21461009857806378a81bd5146100ad57806383197ef0146100cb5780638da5cb5b146100d3575b600080fd5b6100ab6100a6366004610642565b610149565b005b6100b56102ad565b6040516100c29190610714565b60405180910390f35b6100ab61032b565b6000546040516001600160a01b0390911681526020016100c2565b6100ab6100fc366004610642565b610336565b61010961042b565b6040516100c29190610763565b61011e61043f565b60405190151581526020016100c2565b61011e6104cc565b6100ab6101443660046107bb565b610501565b60035460408051632bab69bb60e01b8152905133926001600160a01b031691632bab69bb9160048083019260209291908290030181865afa158015610192573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b691906107df565b6001600160a01b0316146101e55760405162461bcd60e51b81526004016101dc906107fc565b60405180910390fd5b60006040518061010001604052806000815260200188815260200187815260200186600481111561021857610218610695565b81526020018581526020018481526020018381526020014281525090506102476004546001600160a01b031690565b6001600160a01b0316631f60c8a1826040518263ffffffff1660e01b8152600401610272919061083d565b600060405180830381600087803b15801561028c57600080fd5b505af11580156102a0573d6000803e3d6000fd5b5050505050505050505050565b60606102c16005546001600160a01b031690565b6001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa1580156102fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103269190810190610995565b905090565b61033361057a565b30ff5b60035460408051632bab69bb60e01b8152905133926001600160a01b031691632bab69bb9160048083019260209291908290030181865afa15801561037f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a391906107df565b6001600160a01b0316146103c95760405162461bcd60e51b81526004016101dc906107fc565b6000604051806101000160405280600081526020018881526020018781526020018660048111156103fc576103fc610695565b81526020018581526020018481526020018381526020014281525090506102476005546001600160a01b031690565b60606102c16004546001600160a01b031690565b600154604051630689388760e41b815233600482015260009182916001600160a01b03909116906368938870906024015b602060405180830381865afa15801561048d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b191906109e6565b905060001981036104c457600091505090565b600191505090565b600254604051630689388760e41b815233600482015260009182916001600160a01b0390911690636893887090602401610470565b61050961057a565b6001600160a01b03811661056e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101dc565b610577816105e5565b50565b3361058d6000546001600160a01b031690565b6001600160a01b0316146105e35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101dc565b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6005811061057757600080fd5b60008060008060008060c0878903121561065b57600080fd5b8635955060208701359450604087013561067481610635565b959894975094956060810135955060808101359460a0909101359350915050565b634e487b7160e01b600052602160045260246000fd5b8051825260208101516020830152604081015160408301526060810151600581106106e657634e487b7160e01b600052602160045260246000fd5b60608301526080818101519083015260a0808201519083015260c0808201519083015260e090810151910152565b6020808252825182820181905260009190848201906040850190845b81811015610757576107438385516106ab565b928401926101009290920191600101610730565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610757576107928385516106ab565b92840192610100929092019160010161077f565b6001600160a01b038116811461057757600080fd5b6000602082840312156107cd57600080fd5b81356107d8816107a6565b9392505050565b6000602082840312156107f157600080fd5b81516107d8816107a6565b60208082526021908201527f494947436f6e74726f6c6c65723a206973206e6f7420494947204163636f756e6040820152601d60fa1b606082015260800190565b610100810161084c82846106ab565b92915050565b634e487b7160e01b600052604160045260246000fd5b600061010080838503121561087c57600080fd5b6040519081019067ffffffffffffffff8211818310171561089f5761089f610852565b81604052809250835181526020840151602082015260408401516040820152606084015191506108ce82610635565b8160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b600067ffffffffffffffff8084111561091f5761091f610852565b604051601f19603f8660051b01168101818110838211171561094357610943610852565b604052848152915050602080820190600885901b8401908682111561096757600080fd5b845b8281101561098a5761097b8882610868565b84529281019261010001610969565b505050509392505050565b6000602082840312156109a757600080fd5b815167ffffffffffffffff8111156109be57600080fd5b8201601f810184136109cf57600080fd5b6109de84825160208401610904565b949350505050565b6000602082840312156109f857600080fd5b505191905056fea264697066735822122051b4bb1069b48c06c7b963de519e008058271c534c385a4cd09fe18c0af35cf564736f6c63430008110033";

type IIGControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IIGControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IIGController__factory extends ContractFactory {
  constructor(...args: IIGControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    listBusinessAddress: PromiseOrValue<string>,
    listEmployeeAddress: PromiseOrValue<string>,
    listIIGLRResultAddress: PromiseOrValue<string>,
    listIIGSWResultAddress: PromiseOrValue<string>,
    iigDataAddress: PromiseOrValue<string>,
    iigAccountAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IIGController> {
    return super.deploy(
      listBusinessAddress,
      listEmployeeAddress,
      listIIGLRResultAddress,
      listIIGSWResultAddress,
      iigDataAddress,
      iigAccountAddress,
      overrides || {}
    ) as Promise<IIGController>;
  }
  override getDeployTransaction(
    listBusinessAddress: PromiseOrValue<string>,
    listEmployeeAddress: PromiseOrValue<string>,
    listIIGLRResultAddress: PromiseOrValue<string>,
    listIIGSWResultAddress: PromiseOrValue<string>,
    iigDataAddress: PromiseOrValue<string>,
    iigAccountAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      listBusinessAddress,
      listEmployeeAddress,
      listIIGLRResultAddress,
      listIIGSWResultAddress,
      iigDataAddress,
      iigAccountAddress,
      overrides || {}
    );
  }
  override attach(address: string): IIGController {
    return super.attach(address) as IIGController;
  }
  override connect(signer: Signer): IIGController__factory {
    return super.connect(signer) as IIGController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IIGControllerInterface {
    return new utils.Interface(_abi) as IIGControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IIGController {
    return new Contract(address, _abi, signerOrProvider) as IIGController;
  }
}
