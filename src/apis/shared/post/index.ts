import axiosServices from '@apis/axiosServices'
import { IPost } from 'src/globaltypes/posts'

export const getPost = ({ id }: { id: number }) => {
  return axiosServices.get<IPost>(`shared/post/item/${id}`)
}
