import { ethers } from 'ethers';
import { FormikProps } from 'formik';

import { FormikData } from './types';
import { IUseToast, useToast } from '@iscv/toast';

import { ApolloQueryResult, LazyQueryExecFunction } from '@apollo/client';
import { NavigateFunction } from 'react-router-dom';
import { postImage } from '@apis/image';
import { useBusiness } from '@contracts/useBusiness';

export const useRegister = async (
  values: FormikData,
  signer: ethers.providers.JsonRpcSigner,
  toast: IUseToast,
  navigate: NavigateFunction,
  refresh: (
    variables?:
      | Partial<{
          user: string | undefined;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>
) => {
  try {
    const df = new FormData();
    df.append('image', values.avatar);
    const imageSource = await postImage(df).then((success: any) => success.data);
    const businessContract = useBusiness(signer);
    (await businessContract)
      .addBusiness(
        values.category,
        values.fullname,
        values.phone,
        values.professional.toString(),
        values.email,
        values.github,
        values.linkedin,
        imageSource
      )
      .then(async (success) => {
        await refresh();
        toast.success();
        navigate('/');
      });
  } catch (error) {
    console.log(error);
  }
};
