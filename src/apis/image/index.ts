import axiosServices from "@apis/axiosServices";
import { NODE_GRAPHQL_SERVER } from "@constants/index";

export const postImage = (df: FormData) => {
  return axiosServices.post(`${NODE_GRAPHQL_SERVER}image`, df, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
