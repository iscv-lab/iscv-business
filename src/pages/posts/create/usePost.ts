
// import { PostStatus } from 'src/types/posts';
// import { useBusiness } from '@contracts/useBusiness';
// import { IUseToast } from '@iscv/toast';
// import { ethers } from 'ethers';
// import { ApolloQueryResult, OperationVariables } from '@apollo/client';
// import { NavigateFunction } from 'react-router-dom';

// export const usePost = async (
//   values: { image: File; job: string; content: string; hashtag: string; status: PostStatus },
//   toast: IUseToast,
//   signer: ethers.providers.JsonRpcSigner,
//   id: number,
//   refresh: (
//     variables?: Partial<OperationVariables> | undefined
//   ) => Promise<ApolloQueryResult<GetPostsByBusinessId>>,
//   navigate: NavigateFunction
// ) => {
//   const df = new FormData();
//   df.append('image', values.image!);
//   const cid = await postImage(df)
//     .then((success) => success.data)
//     .catch((error) => console.error(error));
//   if (!cid) {
//     toast.error();
//     return;
//   }
//   const contractBusiness = useBusiness(signer);
//   (await contractBusiness)
//     .addPost(id, values.hashtag, values.job, values.content, cid, values.status)
//     .then((sucess) => {
//       toast.success();
//       refresh();
//       navigate({ pathname: 'posts' });
//     })
//     .catch((error) => {
//       console.error(error);
//       toast.error();
//     });
// };
