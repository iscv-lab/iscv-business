import axiosServices from '@apis/axiosServices'
import { IApplyData } from './types'

export const getAllApply = (businessId: number) => {
  return axiosServices.get<IApplyData[]>(`business/apply/list/${businessId}`)
}
