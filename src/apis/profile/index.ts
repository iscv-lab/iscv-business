import axiosServices from '@apis/axiosServices'
import { IBusiness } from 'src/globaltypes'
import { IEmployee } from 'src/types'

export const getBusiness = ({ id }: { id: number }) => {
  return axiosServices.get<IBusiness>(`business/profile/item/${id}`)
}

export const getBusinessByUser = ({ user }: { user: string }) => {
  return axiosServices.get<IBusiness>(`business/profile/user/${user}`)
}

export const getEmployee = (employeId: number) => {
  return axiosServices.get<IEmployee>(`employee/profile/item/${employeId}`)
}
