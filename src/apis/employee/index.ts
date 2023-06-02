import axiosServices from '@apis/axiosServices'
import { ISearched } from './types'

export const searchEmployees = (search: string) => {
  return axiosServices.get<ISearched[]>(`employee/profile/search?search=${search}`)
}
