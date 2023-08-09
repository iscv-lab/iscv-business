import { IMyDocument } from '..'

export type IIIGRequest = {
  _id: string
  employeeId: number
  examId: number
  certificateType: EIIGRequest
  status: ERequestStatus
  createdAt: Date
  updatedAt: Date
  __v: number
} & IMyDocument

export enum ERequestStatus {
  NULL,
  WAITING,
  APPROVED
}

export enum EIIGRequest {
  LR = 'lr',
  SW = 'sw'
}
