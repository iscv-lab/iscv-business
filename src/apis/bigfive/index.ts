import axiosServices from '@apis/axiosServices'
import { IBigFive } from './types'

export const getBigFive = (businessId: number) => {
  return axiosServices.get<IBigFive[]>(`business/bigfive/lastest/${businessId}`)
}
