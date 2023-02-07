import { Professional } from '@pages/register/types';
import { Skill } from './Skill';
import { gql, useQuery } from '@apollo/client';

export type Business = {
  category: number;
  id: number;
  user: string;
  name: string;
  phone: string;
  professional: Professional;
  email: string;
  github: string;
  linkedin: string;
  sourceImage: string;
};

export const getBusinessByUser = gql`
  query Query($user: String) {
    businessByUser(user: $user) {
      category
      id
      user
      name
      phone
      professional
      email
      github
      linkedin
      sourceImage
    }
  }
`;