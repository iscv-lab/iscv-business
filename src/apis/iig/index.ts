import axiosServices from '@apis/axiosServices'
import { IIIGRequest } from 'src/types/iig'
import { ILR } from './types'

export const getListLR = () => {
  return axiosServices.get<ILR[]>(`business/iig/listlr`)
}

export const getListRequest = () => {
  return axiosServices.get<IIIGRequest[]>(`business/iig/listrequest`)
}

export const putApproved = (requestId: string) => {
  return axiosServices.put(`business/iig/approved?requestId=${requestId}`)
}
