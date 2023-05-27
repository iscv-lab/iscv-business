import axiosServices from '@apis/axiosServices'
import { ILR } from './types'

export const getListLR = () => {
  return axiosServices.get<ILR[]>(`business/iig/listlr`)
}
