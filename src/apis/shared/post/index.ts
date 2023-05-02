import axiosServices from '@apis/axiosServices'
import { IPost } from 'src/types/posts'

export const getPost = ({ id }: { id: number }) => {
  return axiosServices.get<IPost>(`shared/post/item/${id}`)
}
