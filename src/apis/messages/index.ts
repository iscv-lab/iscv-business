import axiosServices from '@apis/axiosServices'
import { IRecent } from 'src/types/messages'

export const getRecent = (businessId: number) => {
  return axiosServices.get<IRecent>(
    `business/messages/recent/${businessId}`
  )
}
