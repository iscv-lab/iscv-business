/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CVController,
  CVControllerInterface,
} from "../../../../controller/employee/cv/CVController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "listEmployeeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listEmployeeCVAddress",
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
        internalType: "string",
        name: "source",
        type: "string",
      },
    ],
    name: "addCV",
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
  "0x60806040523480156200001157600080fd5b50604051620011313803806200113183398181016040528101906200003791906200016f565b8082336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620001b6565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000137826200010a565b9050919050565b62000149816200012a565b81146200015557600080fd5b50565b60008151905062000169816200013e565b92915050565b6000806040838503121562000189576200018862000105565b5b6000620001998582860162000158565b9250506020620001ac8582860162000158565b9150509250929050565b610f6b80620001c66000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806383197ef01461005c5780638da5cb5b14610066578063ec40a59b14610084578063f2fde38b146100a2578063ffc1e78a146100be575b600080fd5b6100646100da565b005b61006e6100fb565b60405161007b919061065b565b60405180910390f35b61008c610124565b6040516100999190610691565b60405180910390f35b6100bc60048036038101906100b791906106ec565b6101ff565b005b6100d860048036038101906100d39190610895565b610282565b005b6100e26103b0565b3073ffffffffffffffffffffffffffffffffffffffff16ff5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166368938870336040518263ffffffff1660e01b8152600401610182919061065b565b602060405180830381865afa15801561019f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c39190610906565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81036101f65760009150506101fc565b60019150505b90565b6102076103b0565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610276576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026d906109b6565b60405180910390fd5b61027f81610427565b50565b8161028b610124565b6102ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c190610a48565b60405180910390fd5b6102d3816104eb565b610312576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990610ada565b60405180910390fd5b60006040518060800160405280858152602001600081526020014281526020018481525090506103406105a7565b73ffffffffffffffffffffffffffffffffffffffff1663f4440976826040518263ffffffff1660e01b81526004016103789190610beb565b600060405180830381600087803b15801561039257600080fd5b505af11580156103a6573d6000803e3d6000fd5b5050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff166103cf6100fb565b73ffffffffffffffffffffffffffffffffffffffff1614610425576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041c90610c59565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0886f90846040518263ffffffff1660e01b81526004016105499190610c88565b600060405180830381865afa158015610566573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061058f9190610eec565b905061059f8160400151336105d1565b915050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361060f5760019050610614565b600090505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106458261061a565b9050919050565b6106558161063a565b82525050565b6000602082019050610670600083018461064c565b92915050565b60008115159050919050565b61068b81610676565b82525050565b60006020820190506106a66000830184610682565b92915050565b6000604051905090565b600080fd5b600080fd5b6106c98161063a565b81146106d457600080fd5b50565b6000813590506106e6816106c0565b92915050565b600060208284031215610702576107016106b6565b5b6000610710848285016106d7565b91505092915050565b6000819050919050565b61072c81610719565b811461073757600080fd5b50565b60008135905061074981610723565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107a282610759565b810181811067ffffffffffffffff821117156107c1576107c061076a565b5b80604052505050565b60006107d46106ac565b90506107e08282610799565b919050565b600067ffffffffffffffff821115610800576107ff61076a565b5b61080982610759565b9050602081019050919050565b82818337600083830152505050565b6000610838610833846107e5565b6107ca565b90508281526020810184848401111561085457610853610754565b5b61085f848285610816565b509392505050565b600082601f83011261087c5761087b61074f565b5b813561088c848260208601610825565b91505092915050565b600080604083850312156108ac576108ab6106b6565b5b60006108ba8582860161073a565b925050602083013567ffffffffffffffff8111156108db576108da6106bb565b5b6108e785828601610867565b9150509250929050565b60008151905061090081610723565b92915050565b60006020828403121561091c5761091b6106b6565b5b600061092a848285016108f1565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006109a0602683610933565b91506109ab82610944565b604082019050919050565b600060208201905081810360008301526109cf81610993565b9050919050565b7f4c697374456d706c6f796565437572736f723a2061646472657373206e6f742060008201527f62656c6f6e677320746f20746865206163636f756e7400000000000000000000602082015250565b6000610a32603683610933565b9150610a3d826109d6565b604082019050919050565b60006020820190508181036000830152610a6181610a25565b9050919050565b7f4c697374456d706c6f796565437572736f723a206964206973206e6f7420626560008201527f6c6f6e6720746f20616464726573730000000000000000000000000000000000602082015250565b6000610ac4602f83610933565b9150610acf82610a68565b604082019050919050565b60006020820190508181036000830152610af381610ab7565b9050919050565b610b0381610719565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b43578082015181840152602081019050610b28565b60008484015250505050565b6000610b5a82610b09565b610b648185610b14565b9350610b74818560208601610b25565b610b7d81610759565b840191505092915050565b6000608083016000830151610ba06000860182610afa565b506020830151610bb36020860182610afa565b506040830151610bc66040860182610afa565b5060608301518482036060860152610bde8282610b4f565b9150508091505092915050565b60006020820190508181036000830152610c058184610b88565b905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610c43602083610933565b9150610c4e82610c0d565b602082019050919050565b60006020820190508181036000830152610c7281610c36565b9050919050565b610c8281610719565b82525050565b6000602082019050610c9d6000830184610c79565b92915050565b600080fd5b600080fd5b600081519050610cbc816106c0565b92915050565b6000610cd5610cd0846107e5565b6107ca565b905082815260208101848484011115610cf157610cf0610754565b5b610cfc848285610b25565b509392505050565b600082601f830112610d1957610d1861074f565b5b8151610d29848260208601610cc2565b91505092915050565b60006101408284031215610d4957610d48610ca3565b5b610d546101406107ca565b90506000610d64848285016108f1565b6000830152506020610d78848285016108f1565b6020830152506040610d8c84828501610cad565b604083015250606082015167ffffffffffffffff811115610db057610daf610ca8565b5b610dbc84828501610d04565b606083015250608082015167ffffffffffffffff811115610de057610ddf610ca8565b5b610dec84828501610d04565b60808301525060a082015167ffffffffffffffff811115610e1057610e0f610ca8565b5b610e1c84828501610d04565b60a08301525060c082015167ffffffffffffffff811115610e4057610e3f610ca8565b5b610e4c84828501610d04565b60c08301525060e082015167ffffffffffffffff811115610e7057610e6f610ca8565b5b610e7c84828501610d04565b60e08301525061010082015167ffffffffffffffff811115610ea157610ea0610ca8565b5b610ead84828501610d04565b6101008301525061012082015167ffffffffffffffff811115610ed357610ed2610ca8565b5b610edf84828501610d04565b6101208301525092915050565b600060208284031215610f0257610f016106b6565b5b600082015167ffffffffffffffff811115610f2057610f1f6106bb565b5b610f2c84828501610d32565b9150509291505056fea264697066735822122053ae722044f7ab1e05774384e36a4cc18b35c60e329716bf78919ec44e2e6c9264736f6c63430008110033";

type CVControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CVControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CVController__factory extends ContractFactory {
  constructor(...args: CVControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    listEmployeeAddress: PromiseOrValue<string>,
    listEmployeeCVAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CVController> {
    return super.deploy(
      listEmployeeAddress,
      listEmployeeCVAddress,
      overrides || {}
    ) as Promise<CVController>;
  }
  override getDeployTransaction(
    listEmployeeAddress: PromiseOrValue<string>,
    listEmployeeCVAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      listEmployeeAddress,
      listEmployeeCVAddress,
      overrides || {}
    );
  }
  override attach(address: string): CVController {
    return super.attach(address) as CVController;
  }
  override connect(signer: Signer): CVController__factory {
    return super.connect(signer) as CVController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CVControllerInterface {
    return new utils.Interface(_abi) as CVControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CVController {
    return new Contract(address, _abi, signerOrProvider) as CVController;
  }
}
