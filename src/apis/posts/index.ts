import axiosServices from '@apis/axiosServices'
import { IForm } from '@pages/posts/create'
import { IPost } from 'src/types/posts'

export const getMyPosts = ({ userid }: { userid: number }) => {
  return axiosServices.get<IPost[]>(`business/posts/myposts/${userid}`)
}

export const newPost = (businessId: number, data: IForm) => {
  const fd = new FormData()
  fd.append('businessId', String(businessId))
  fd.append('content', data.content)
  fd.append('hashtag', data.hashtag)
  fd.append('job', data.job)
  fd.append('status', String(data.status))
  if (data.image) fd.append('image', data.image)
  if (data.video) fd.append('video', data.video)

  return axiosServices.post<any>(`business/posts/new`, fd, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export const getPost = ({ id }: { id: string }) => {
  return axiosServices.get<IPost>(`business/posts/get/${id}`)
}
