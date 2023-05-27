import axiosServices from '@apis/axiosServices'
import { IBusiness } from 'src/globaltypes'

export const postAvatar = (df: FormData) => {
  return axiosServices.post(`business/profile/avatar`, df)
}

export const getBusiness = ({ id }: { id: number }) => {
  return axiosServices.get<IBusiness>(`business/profile/item/${id}`)
}

export const getBusinessByUser = ({ user }: { user: string }) => {
  return axiosServices.get<IBusiness>(`business/profile/user/${user}`)
}
