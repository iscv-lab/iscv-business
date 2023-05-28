/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ListBusiness,
  ListBusinessInterface,
} from "../../../database/business/ListBusiness";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
          {
            internalType: "enum EBusinessCategory",
            name: "category",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct Profile",
        name: "item",
        type: "tuple",
      },
    ],
    name: "Add",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
          {
            internalType: "enum EBusinessCategory",
            name: "category",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct Profile",
        name: "item",
        type: "tuple",
      },
    ],
    name: "Remove",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
          {
            internalType: "enum EBusinessCategory",
            name: "category",
            type: "uint8",
          },
        ],
        internalType: "struct Profile",
        name: "item",
        type: "tuple",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "at",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
          {
            internalType: "enum EBusinessCategory",
            name: "category",
            type: "uint8",
          },
        ],
        internalType: "struct Profile",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "atAddress",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
          {
            internalType: "enum EBusinessCategory",
            name: "category",
            type: "uint8",
          },
        ],
        internalType: "struct Profile",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
          {
            internalType: "enum EBusinessCategory",
            name: "category",
            type: "uint8",
          },
        ],
        internalType: "struct Profile",
        name: "item",
        type: "tuple",
      },
    ],
    name: "edit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "findIdByAddress",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAll",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
          {
            internalType: "enum EBusinessCategory",
            name: "category",
            type: "uint8",
          },
        ],
        internalType: "struct Profile[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "list",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "phone",
        type: "string",
      },
      {
        internalType: "string",
        name: "professional",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "github",
        type: "string",
      },
      {
        internalType: "string",
        name: "linkedin",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceImage",
        type: "string",
      },
      {
        internalType: "enum EBusinessCategory",
        name: "category",
        type: "uint8",
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
        name: "value",
        type: "address",
      },
    ],
    name: "retrive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setEmail",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setGithub",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setLinkedin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setPhone",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setProfessional",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setSourceImage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setUser",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b50600080546001600160a01b0319163317905562000036620000303390565b6200003c565b620000de565b620000466200006d565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b33620000816000546001600160a01b031690565b6001600160a01b031614620000dc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6125b480620000ee6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806380c9419e116100b8578063daea85c51161007c578063daea85c514610294578063db4d295b146102a7578063e0886f90146102ba578063e396c622146102cd578063f2fde38b146102e0578063fe55932a146102f357600080fd5b806380c9419e1461022257806383197ef01461024b5780638da5cb5b146102535780639da3ffb41461026e578063c3200fdc1461028157600080fd5b80634da07e19116100ff5780634da07e191461019d57806352d0fa14146101b057806353ed5143146101d957806368938870146101ee5780636a179ab41461020f57600080fd5b806313f517d51461013c57806319f1d115146101515780631c136e3d146101645780632417450f1461017757806341fc96fc1461018a575b600080fd5b61014f61014a366004611f00565b610306565b005b61014f61015f366004612079565b610423565b61014f61017236600461209b565b610454565b61014f6101853660046120e2565b610492565b61014f61019836600461209b565b6104bb565b61014f6101ab36600461209b565b6104f4565b6101c36101be3660046120e2565b61052d565b6040516101d0919061227b565b60405180910390f35b6101e1610ac5565b6040516101d0919061228e565b6102016101fc3660046120e2565b610f76565b6040519081526020016101d0565b61014f61021d36600461209b565b61100c565b6102356102303660046122f0565b611045565b6040516101d09a99989796959493929190612309565b61014f61146b565b6000546040516001600160a01b0390911681526020016101d0565b61014f61027c36600461209b565b611476565b61014f61028f366004611f00565b6114af565b61014f6102a23660046120e2565b611655565b61014f6102b53660046123cd565b611684565b6101c36102c83660046122f0565b6116d9565b61014f6102db36600461209b565b611b7d565b61014f6102ee3660046120e2565b611bb6565b61014f61030136600461209b565b611c34565b61030e611c6d565b806002826000015181548110610326576103266123f9565b60009182526020918290208351600a9290920201908155908201516001820180546001600160a01b0319166001600160a01b03909216919091179055604082015160028201906103769082612497565b506060820151600382019061038b9082612497565b50608082015160048201906103a09082612497565b5060a082015160058201906103b59082612497565b5060c082015160068201906103ca9082612497565b5060e082015160078201906103df9082612497565b5061010082015160088201906103f59082612497565b5061012082015160098201805460ff1916600183818111156104195761041961214a565b0217905550505050565b61042b611c6d565b806002838154811061043f5761043f6123f9565b60009182526020909120600a90910201555050565b61045c611c6d565b8060028381548110610470576104706123f9565b90600052602060002090600a0201600701908161048d9190612497565b505050565b61049a611ce3565b6001600160a01b03166000908152600160205260409020805460ff19169055565b6104c3611c6d565b80600283815481106104d7576104d76123f9565b90600052602060002090600a0201600501908161048d9190612497565b6104fc611c6d565b8060028381548110610510576105106123f9565b90600052602060002090600a0201600301908161048d9190612497565b610535611d9c565b60005b600254811015610a3057826001600160a01b03166002828154811061055f5761055f6123f9565b600091825260209091206001600a9092020101546001600160a01b031603610a1e5760028181548110610594576105946123f9565b90600052602060002090600a020160405180610140016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820180546105f79061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546106239061240f565b80156106705780601f1061064557610100808354040283529160200191610670565b820191906000526020600020905b81548152906001019060200180831161065357829003601f168201915b505050505081526020016003820180546106899061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546106b59061240f565b80156107025780601f106106d757610100808354040283529160200191610702565b820191906000526020600020905b8154815290600101906020018083116106e557829003601f168201915b5050505050815260200160048201805461071b9061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546107479061240f565b80156107945780601f1061076957610100808354040283529160200191610794565b820191906000526020600020905b81548152906001019060200180831161077757829003601f168201915b505050505081526020016005820180546107ad9061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546107d99061240f565b80156108265780601f106107fb57610100808354040283529160200191610826565b820191906000526020600020905b81548152906001019060200180831161080957829003601f168201915b5050505050815260200160068201805461083f9061240f565b80601f016020809104026020016040519081016040528092919081815260200182805461086b9061240f565b80156108b85780601f1061088d576101008083540402835291602001916108b8565b820191906000526020600020905b81548152906001019060200180831161089b57829003601f168201915b505050505081526020016007820180546108d19061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546108fd9061240f565b801561094a5780601f1061091f5761010080835404028352916020019161094a565b820191906000526020600020905b81548152906001019060200180831161092d57829003601f168201915b505050505081526020016008820180546109639061240f565b80601f016020809104026020016040519081016040528092919081815260200182805461098f9061240f565b80156109dc5780601f106109b1576101008083540402835291602001916109dc565b820191906000526020600020905b8154815290600101906020018083116109bf57829003601f168201915b5050509183525050600982015460209091019060ff166001811115610a0357610a0361214a565b6001811115610a1457610a1461214a565b9052509392505050565b80610a2881612557565b915050610538565b50604080516101408101825260001981526000602080830182905283518082018552828152838501528351808201855282815260608401528351808201855282815260808401528351808201855282815260a08401528351808201855282815260c08401528351808201855282815260e084015283519081019093528083526101008201929092529061012082015292915050565b60606002805480602002602001604051908101604052809291908181526020016000905b82821015610f6d5760008481526020908190206040805161014081018252600a86029092018054835260018101546001600160a01b03169383019390935260028301805492939291840191610b3d9061240f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b699061240f565b8015610bb65780601f10610b8b57610100808354040283529160200191610bb6565b820191906000526020600020905b815481529060010190602001808311610b9957829003601f168201915b50505050508152602001600382018054610bcf9061240f565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfb9061240f565b8015610c485780601f10610c1d57610100808354040283529160200191610c48565b820191906000526020600020905b815481529060010190602001808311610c2b57829003601f168201915b50505050508152602001600482018054610c619061240f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8d9061240f565b8015610cda5780601f10610caf57610100808354040283529160200191610cda565b820191906000526020600020905b815481529060010190602001808311610cbd57829003601f168201915b50505050508152602001600582018054610cf39061240f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1f9061240f565b8015610d6c5780601f10610d4157610100808354040283529160200191610d6c565b820191906000526020600020905b815481529060010190602001808311610d4f57829003601f168201915b50505050508152602001600682018054610d859061240f565b80601f0160208091040260200160405190810160405280929190818152602001828054610db19061240f565b8015610dfe5780601f10610dd357610100808354040283529160200191610dfe565b820191906000526020600020905b815481529060010190602001808311610de157829003601f168201915b50505050508152602001600782018054610e179061240f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e439061240f565b8015610e905780601f10610e6557610100808354040283529160200191610e90565b820191906000526020600020905b815481529060010190602001808311610e7357829003601f168201915b50505050508152602001600882018054610ea99061240f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed59061240f565b8015610f225780601f10610ef757610100808354040283529160200191610f22565b820191906000526020600020905b815481529060010190602001808311610f0557829003601f168201915b5050509183525050600982015460209091019060ff166001811115610f4957610f4961214a565b6001811115610f5a57610f5a61214a565b8152505081526020019060010190610ae9565b50505050905090565b6000805b60025481101561100257826001600160a01b031660028281548110610fa157610fa16123f9565b600091825260209091206001600a9092020101546001600160a01b031603610ff05760028181548110610fd657610fd66123f9565b90600052602060002090600a020160000154915050919050565b80610ffa81612557565b915050610f7a565b5060001992915050565b611014611c6d565b8060028381548110611028576110286123f9565b90600052602060002090600a0201600601908161048d9190612497565b6002818154811061105557600080fd5b60009182526020909120600a90910201805460018201546002830180549294506001600160a01b03909116929161108b9061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546110b79061240f565b80156111045780601f106110d957610100808354040283529160200191611104565b820191906000526020600020905b8154815290600101906020018083116110e757829003601f168201915b5050505050908060030180546111199061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546111459061240f565b80156111925780601f1061116757610100808354040283529160200191611192565b820191906000526020600020905b81548152906001019060200180831161117557829003601f168201915b5050505050908060040180546111a79061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546111d39061240f565b80156112205780601f106111f557610100808354040283529160200191611220565b820191906000526020600020905b81548152906001019060200180831161120357829003601f168201915b5050505050908060050180546112359061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546112619061240f565b80156112ae5780601f10611283576101008083540402835291602001916112ae565b820191906000526020600020905b81548152906001019060200180831161129157829003601f168201915b5050505050908060060180546112c39061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546112ef9061240f565b801561133c5780601f106113115761010080835404028352916020019161133c565b820191906000526020600020905b81548152906001019060200180831161131f57829003601f168201915b5050505050908060070180546113519061240f565b80601f016020809104026020016040519081016040528092919081815260200182805461137d9061240f565b80156113ca5780601f1061139f576101008083540402835291602001916113ca565b820191906000526020600020905b8154815290600101906020018083116113ad57829003601f168201915b5050505050908060080180546113df9061240f565b80601f016020809104026020016040519081016040528092919081815260200182805461140b9061240f565b80156114585780601f1061142d57610100808354040283529160200191611458565b820191906000526020600020905b81548152906001019060200180831161143b57829003601f168201915b5050506009909301549192505060ff168a565b611473611ce3565b30ff5b61147e611c6d565b8060028381548110611492576114926123f9565b90600052602060002090600a0201600801908161048d9190612497565b6114b7611c6d565b6002805480835260018101825560009190915281517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace600a90920291820190815560208301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf830180546001600160a01b0319166001600160a01b03909216919091179055604083015183927f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad001906115719082612497565b50606082015160038201906115869082612497565b506080820151600482019061159b9082612497565b5060a082015160058201906115b09082612497565b5060c082015160068201906115c59082612497565b5060e082015160078201906115da9082612497565b5061010082015160088201906115f09082612497565b5061012082015160098201805460ff1916600183818111156116145761161461214a565b021790555050507fa963857373c24defdf0bbc7a480b059398df51659016ef98fedef01c80dbe4b38160405161164a919061227b565b60405180910390a150565b61165d611ce3565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b61168c611c6d565b80600283815481106116a0576116a06123f9565b90600052602060002090600a020160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505050565b6116e1611d9c565b600282815481106116f4576116f46123f9565b90600052602060002090600a020160405180610140016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820180546117579061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546117839061240f565b80156117d05780601f106117a5576101008083540402835291602001916117d0565b820191906000526020600020905b8154815290600101906020018083116117b357829003601f168201915b505050505081526020016003820180546117e99061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546118159061240f565b80156118625780601f1061183757610100808354040283529160200191611862565b820191906000526020600020905b81548152906001019060200180831161184557829003601f168201915b5050505050815260200160048201805461187b9061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546118a79061240f565b80156118f45780601f106118c9576101008083540402835291602001916118f4565b820191906000526020600020905b8154815290600101906020018083116118d757829003601f168201915b5050505050815260200160058201805461190d9061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546119399061240f565b80156119865780601f1061195b57610100808354040283529160200191611986565b820191906000526020600020905b81548152906001019060200180831161196957829003601f168201915b5050505050815260200160068201805461199f9061240f565b80601f01602080910402602001604051908101604052809291908181526020018280546119cb9061240f565b8015611a185780601f106119ed57610100808354040283529160200191611a18565b820191906000526020600020905b8154815290600101906020018083116119fb57829003601f168201915b50505050508152602001600782018054611a319061240f565b80601f0160208091040260200160405190810160405280929190818152602001828054611a5d9061240f565b8015611aaa5780601f10611a7f57610100808354040283529160200191611aaa565b820191906000526020600020905b815481529060010190602001808311611a8d57829003601f168201915b50505050508152602001600882018054611ac39061240f565b80601f0160208091040260200160405190810160405280929190818152602001828054611aef9061240f565b8015611b3c5780601f10611b1157610100808354040283529160200191611b3c565b820191906000526020600020905b815481529060010190602001808311611b1f57829003601f168201915b5050509183525050600982015460209091019060ff166001811115611b6357611b6361214a565b6001811115611b7457611b7461214a565b90525092915050565b611b85611c6d565b8060028381548110611b9957611b996123f9565b90600052602060002090600a0201600401908161048d9190612497565b611bbe611ce3565b6001600160a01b038116611c285760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b611c3181611d4c565b50565b611c3c611c6d565b8060028381548110611c5057611c506123f9565b90600052602060002090600a0201600201908161048d9190612497565b3360009081526001602052604090205460ff1680611c9557506000546001600160a01b031633145b611ce15760405162461bcd60e51b815260206004820152601960248201527f5065726d697373696f6e3a206f6e6c7920617070726f766564000000000000006044820152606401611c1f565b565b33611cf66000546001600160a01b031690565b6001600160a01b031614611ce15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401611c1f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518061014001604052806000815260200160006001600160a01b031681526020016060815260200160608152602001606081526020016060815260200160608152602001606081526020016060815260200160006001811115611e0357611e0361214a565b905290565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e4257611e42611e08565b60405290565b80356001600160a01b0381168114611e5f57600080fd5b919050565b600082601f830112611e7557600080fd5b813567ffffffffffffffff80821115611e9057611e90611e08565b604051601f8301601f19908116603f01168101908282118183101715611eb857611eb8611e08565b81604052838152866020858801011115611ed157600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560028110611e5f57600080fd5b600060208284031215611f1257600080fd5b813567ffffffffffffffff80821115611f2a57600080fd5b908301906101408286031215611f3f57600080fd5b611f47611e1e565b82358152611f5760208401611e48565b6020820152604083013582811115611f6e57600080fd5b611f7a87828601611e64565b604083015250606083013582811115611f9257600080fd5b611f9e87828601611e64565b606083015250608083013582811115611fb657600080fd5b611fc287828601611e64565b60808301525060a083013582811115611fda57600080fd5b611fe687828601611e64565b60a08301525060c083013582811115611ffe57600080fd5b61200a87828601611e64565b60c08301525060e08301358281111561202257600080fd5b61202e87828601611e64565b60e083015250610100808401358381111561204857600080fd5b61205488828701611e64565b828401525050610120915061206a828401611ef1565b91810191909152949350505050565b6000806040838503121561208c57600080fd5b50508035926020909101359150565b600080604083850312156120ae57600080fd5b82359150602083013567ffffffffffffffff8111156120cc57600080fd5b6120d885828601611e64565b9150509250929050565b6000602082840312156120f457600080fd5b6120fd82611e48565b9392505050565b6000815180845260005b8181101561212a5760208185018101518683018201520161210e565b506000602082860101526020601f19601f83011685010191505092915050565b634e487b7160e01b600052602160045260246000fd5b6002811061217e57634e487b7160e01b600052602160045260246000fd5b9052565b60006101408251845260208301516121a560208601826001600160a01b03169052565b5060408301518160408601526121bd82860182612104565b915050606083015184820360608601526121d78282612104565b915050608083015184820360808601526121f18282612104565b91505060a083015184820360a086015261220b8282612104565b91505060c083015184820360c08601526122258282612104565b91505060e083015184820360e086015261223f8282612104565b915050610100808401518583038287015261225a8382612104565b925050506101208084015161227182870182612160565b5090949350505050565b6020815260006120fd6020830184612182565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156122e357603f198886030184526122d1858351612182565b945092850192908501906001016122b5565b5092979650505050505050565b60006020828403121561230257600080fd5b5035919050565b8a81526001600160a01b038a166020820152610140604082018190526000906123348382018c612104565b90508281036060840152612348818b612104565b9050828103608084015261235c818a612104565b905082810360a08401526123708189612104565b905082810360c08401526123848188612104565b905082810360e08401526123988187612104565b90508281036101008401526123ad8186612104565b9150506123be610120830184612160565b9b9a5050505050505050505050565b600080604083850312156123e057600080fd5b823591506123f060208401611e48565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061242357607f821691505b60208210810361244357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561048d57600081815260208120601f850160051c810160208610156124705750805b601f850160051c820191505b8181101561248f5782815560010161247c565b505050505050565b815167ffffffffffffffff8111156124b1576124b1611e08565b6124c5816124bf845461240f565b84612449565b602080601f8311600181146124fa57600084156124e25750858301515b600019600386901b1c1916600185901b17855561248f565b600085815260208120601f198616915b828110156125295788860151825594840194600190910190840161250a565b50858210156125475787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006001820161257757634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220292e5222b63cc1ce6f7c2b1862e6c4885d9ecbb561bd95d87e0e051404767e6864736f6c63430008110033";

type ListBusinessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ListBusinessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ListBusiness__factory extends ContractFactory {
  constructor(...args: ListBusinessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ListBusiness> {
    return super.deploy(overrides || {}) as Promise<ListBusiness>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ListBusiness {
    return super.attach(address) as ListBusiness;
  }
  override connect(signer: Signer): ListBusiness__factory {
    return super.connect(signer) as ListBusiness__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ListBusinessInterface {
    return new utils.Interface(_abi) as ListBusinessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ListBusiness {
    return new Contract(address, _abi, signerOrProvider) as ListBusiness;
  }
}
