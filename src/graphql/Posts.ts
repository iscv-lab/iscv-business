import { gql } from '@apollo/client';
import { PostStatus } from 'src/types/posts';
export const getPosts = gql`
  query Query {
    posts {
      id
      businessId
      hashTag
      time
      content
      imageSource
      job
      status
    }
  }
`;
export type Post = {
  id: number;
  businessId: number;
  hashTag: any;
  time: any;
  content: string;
  imageSource: string;
  job: string;
  status: PostStatus;
};
export type GetPosts = {
  posts: Post[];
};

export const getPostsByBusinessId = gql`
  query Query($businessId: Int) {
    postsByBusinessId(businessId: $businessId) {
      id
      businessId
      hashtag
      time
      content
      imageSource
      job
      status
    }
  }
`;

export type GetPostsByBusinessId = {
  postsByBusinessId: Post[] | null;
};
