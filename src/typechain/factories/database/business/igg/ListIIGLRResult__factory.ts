/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ListIIGLRResult,
  ListIIGLRResultInterface,
} from "../../../../database/business/igg/ListIIGLRResult";

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
            internalType: "uint256",
            name: "businessId",
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
        indexed: false,
        internalType: "struct IIGLRResult",
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
            internalType: "uint256",
            name: "businessId",
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
        indexed: false,
        internalType: "struct IIGLRResult",
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
            internalType: "uint256",
            name: "businessId",
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
        internalType: "struct IIGLRResult",
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
            internalType: "uint256",
            name: "businessId",
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
        internalType: "struct IIGLRResult",
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
            internalType: "uint256",
            name: "businessId",
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
        internalType: "uint256",
        name: "businessId",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setBusinessId",
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
    name: "setEmployeeId",
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
    name: "setExprireDate",
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
    name: "setListeningScore",
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
    name: "setReadingScore",
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
        name: "businessId",
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
    ],
    name: "setRequest",
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
        internalType: "enum IIGShiftTest",
        name: "value",
        type: "uint8",
      },
    ],
    name: "setShiftTest",
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
    name: "setTestDate",
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
  "0x60806040523480156200001157600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000072620000666200007860201b60201c565b6200008060201b60201c565b62000218565b600033905090565b62000090620000ea60201b60201c565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b3373ffffffffffffffffffffffffffffffffffffffff16620001116200016c60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146200016a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016190620001f6565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620001de60208362000195565b9150620001eb82620001a6565b602082019050919050565b600060208201905081810360008301526200021181620001cf565b9050919050565b6116be80620002286000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806381847fc4116100a2578063daea85c511610071578063daea85c51461026e578063e0886f901461028a578063e6a1b60f146102ba578063f2fde38b146102d6578063f7f6e9bb146102f25761010b565b806381847fc41461020e57806383197ef01461022a5780638da5cb5b146102345780638f89e6f2146102525761010b565b806353ed5143116100de57806353ed51431461018057806377ea9d951461019e5780637acc2158146101ba57806380c9419e146101d65761010b565b806307b3c0bc146101105780631d7d68961461012c5780632417450f1461014857806328d6c8bf14610164575b600080fd5b61012a60048036038101906101259190610d75565b61030e565b005b61014660048036038101906101419190610d75565b610344565b005b610162600480360381019061015d9190610e13565b61037a565b005b61017e60048036038101906101799190610d75565b6103dd565b005b610188610413565b604051610195919061102d565b60405180910390f35b6101b860048036038101906101b39190610d75565b6104fe565b005b6101d460048036038101906101cf9190611074565b610534565b005b6101f060048036038101906101eb919061112a565b61068f565b60405161020599989796959493929190611175565b60405180910390f35b61022860048036038101906102239190611202565b6106fa565b005b610232610753565b005b61023c610774565b6040516102499190611251565b60405180910390f35b61026c600480360381019061026791906113dd565b61079d565b005b61028860048036038101906102839190610e13565b61089d565b005b6102a4600480360381019061029f919061112a565b6108ff565b6040516102b191906114c2565b60405180910390f35b6102d460048036038101906102cf9190610d75565b6109c7565b005b6102f060048036038101906102eb9190610e13565b6109fd565b005b61030c60048036038101906103079190610d75565b610a80565b005b610316610ab6565b806002838154811061032b5761032a6114de565b5b9060005260206000209060090201600601819055505050565b61034c610ab6565b8060028381548110610361576103606114de565b5b9060005260206000209060090201600501819055505050565b610382610b8f565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6103e5610ab6565b80600283815481106103fa576103f96114de565b5b9060005260206000209060090201600701819055505050565b60606002805480602002602001604051908101604052809291908181526020016000905b828210156104f5578382906000526020600020906009020160405180610120016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1660048111156104a8576104a7610e7b565b5b60048111156104ba576104b9610e7b565b5b815260200160058201548152602001600682015481526020016007820154815260200160088201548152505081526020019060010190610437565b50505050905090565b610506610ab6565b806002838154811061051b5761051a6114de565b5b9060005260206000209060090201600301819055505050565b61053c610ab6565b8660028981548110610551576105506114de565b5b906000526020600020906009020160010181905550856002898154811061057b5761057a6114de565b5b90600052602060002090600902016002018190555084600289815481106105a5576105a46114de565b5b90600052602060002090600902016003018190555083600289815481106105cf576105ce6114de565b5b906000526020600020906009020160040160006101000a81548160ff0219169083600481111561060257610601610e7b565b5b0217905550826002898154811061061c5761061b6114de565b5b9060005260206000209060090201600501819055508160028981548110610646576106456114de565b5b90600052602060002090600902016006018190555080600289815481106106705761066f6114de565b5b9060005260206000209060090201600701819055505050505050505050565b6002818154811061069f57600080fd5b90600052602060002090600902016000915090508060000154908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060060154908060070154908060080154905089565b610702610ab6565b8060028381548110610717576107166114de565b5b906000526020600020906009020160040160006101000a81548160ff0219169083600481111561074a57610749610e7b565b5b02179055505050565b61075b610b8f565b3073ffffffffffffffffffffffffffffffffffffffff16ff5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6107a5610ab6565b60028054905081600001818152505060028190806001815401808255809150506001900390600052602060002090600902016000909190919091506000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff0219169083600481111561083357610832610e7b565b5b021790555060a0820151816005015560c0820151816006015560e08201518160070155610100820151816008015550507f1a3f6b5b0d083fb190ce90a540487b96ba479b4eabe94d95fb0c629f33088b928160405161089291906114c2565b60405180910390a150565b6108a5610b8f565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610907610cd2565b6002828154811061091b5761091a6114de565b5b906000526020600020906009020160405180610120016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16600481111561098257610981610e7b565b5b600481111561099457610993610e7b565b5b81526020016005820154815260200160068201548152602001600782015481526020016008820154815250509050919050565b6109cf610ab6565b80600283815481106109e4576109e36114de565b5b9060005260206000209060090201600201819055505050565b610a05610b8f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6b90611590565b60405180910390fd5b610a7d81610c06565b50565b610a88610ab6565b8060028381548110610a9d57610a9c6114de565b5b9060005260206000209060090201600101819055505050565b60016000610ac2610cca565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680610b4e5750610b18610774565b73ffffffffffffffffffffffffffffffffffffffff16610b36610cca565b73ffffffffffffffffffffffffffffffffffffffff16145b610b8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b84906115fc565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff16610bae610774565b73ffffffffffffffffffffffffffffffffffffffff1614610c04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfb90611668565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160006004811115610d0e57610d0d610e7b565b5b8152602001600081526020016000815260200160008152602001600081525090565b6000604051905090565b600080fd5b6000819050919050565b610d5281610d3f565b8114610d5d57600080fd5b50565b600081359050610d6f81610d49565b92915050565b60008060408385031215610d8c57610d8b610d3a565b5b6000610d9a85828601610d60565b9250506020610dab85828601610d60565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610de082610db5565b9050919050565b610df081610dd5565b8114610dfb57600080fd5b50565b600081359050610e0d81610de7565b92915050565b600060208284031215610e2957610e28610d3a565b5b6000610e3784828501610dfe565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610e7581610d3f565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60058110610ebb57610eba610e7b565b5b50565b6000819050610ecc82610eaa565b919050565b6000610edc82610ebe565b9050919050565b610eec81610ed1565b82525050565b61012082016000820151610f096000850182610e6c565b506020820151610f1c6020850182610e6c565b506040820151610f2f6040850182610e6c565b506060820151610f426060850182610e6c565b506080820151610f556080850182610ee3565b5060a0820151610f6860a0850182610e6c565b5060c0820151610f7b60c0850182610e6c565b5060e0820151610f8e60e0850182610e6c565b50610100820151610fa3610100850182610e6c565b50505050565b6000610fb58383610ef2565b6101208301905092915050565b6000602082019050919050565b6000610fda82610e40565b610fe48185610e4b565b9350610fef83610e5c565b8060005b838110156110205781516110078882610fa9565b975061101283610fc2565b925050600181019050610ff3565b5085935050505092915050565b600060208201905081810360008301526110478184610fcf565b905092915050565b6005811061105c57600080fd5b50565b60008135905061106e8161104f565b92915050565b600080600080600080600080610100898b03121561109557611094610d3a565b5b60006110a38b828c01610d60565b98505060206110b48b828c01610d60565b97505060406110c58b828c01610d60565b96505060606110d68b828c01610d60565b95505060806110e78b828c0161105f565b94505060a06110f88b828c01610d60565b93505060c06111098b828c01610d60565b92505060e061111a8b828c01610d60565b9150509295985092959890939650565b6000602082840312156111405761113f610d3a565b5b600061114e84828501610d60565b91505092915050565b61116081610d3f565b82525050565b61116f81610ed1565b82525050565b60006101208201905061118b600083018c611157565b611198602083018b611157565b6111a5604083018a611157565b6111b26060830189611157565b6111bf6080830188611166565b6111cc60a0830187611157565b6111d960c0830186611157565b6111e660e0830185611157565b6111f4610100830184611157565b9a9950505050505050505050565b6000806040838503121561121957611218610d3a565b5b600061122785828601610d60565b92505060206112388582860161105f565b9150509250929050565b61124b81610dd5565b82525050565b60006020820190506112666000830184611242565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6112ba82611271565b810181811067ffffffffffffffff821117156112d9576112d8611282565b5b80604052505050565b60006112ec610d30565b90506112f882826112b1565b919050565b600061012082840312156113145761131361126c565b5b61131f6101206112e2565b9050600061132f84828501610d60565b600083015250602061134384828501610d60565b602083015250604061135784828501610d60565b604083015250606061136b84828501610d60565b606083015250608061137f8482850161105f565b60808301525060a061139384828501610d60565b60a08301525060c06113a784828501610d60565b60c08301525060e06113bb84828501610d60565b60e0830152506101006113d084828501610d60565b6101008301525092915050565b600061012082840312156113f4576113f3610d3a565b5b6000611402848285016112fd565b91505092915050565b610120820160008201516114226000850182610e6c565b5060208201516114356020850182610e6c565b5060408201516114486040850182610e6c565b50606082015161145b6060850182610e6c565b50608082015161146e6080850182610ee3565b5060a082015161148160a0850182610e6c565b5060c082015161149460c0850182610e6c565b5060e08201516114a760e0850182610e6c565b506101008201516114bc610100850182610e6c565b50505050565b6000610120820190506114d8600083018461140b565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061157a60268361150d565b91506115858261151e565b604082019050919050565b600060208201905081810360008301526115a98161156d565b9050919050565b7f5065726d697373696f6e3a206f6e6c7920617070726f76656400000000000000600082015250565b60006115e660198361150d565b91506115f1826115b0565b602082019050919050565b60006020820190508181036000830152611615816115d9565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061165260208361150d565b915061165d8261161c565b602082019050919050565b6000602082019050818103600083015261168181611645565b905091905056fea2646970667358221220a39c1054590c8d6fc38687cd3fb1185b7de36eb9c63039e94e39967296cb90dd64736f6c63430008110033";

type ListIIGLRResultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ListIIGLRResultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ListIIGLRResult__factory extends ContractFactory {
  constructor(...args: ListIIGLRResultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ListIIGLRResult> {
    return super.deploy(overrides || {}) as Promise<ListIIGLRResult>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ListIIGLRResult {
    return super.attach(address) as ListIIGLRResult;
  }
  override connect(signer: Signer): ListIIGLRResult__factory {
    return super.connect(signer) as ListIIGLRResult__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ListIIGLRResultInterface {
    return new utils.Interface(_abi) as ListIIGLRResultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ListIIGLRResult {
    return new Contract(address, _abi, signerOrProvider) as ListIIGLRResult;
  }
}
