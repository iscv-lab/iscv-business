import { IIGShiftTest } from "@globaltypes/iig"

export type ILR = {
  id: number
  employeeId: number
  testDate: number
  shiftTest: IIGShiftTest
  expireDate: number
  listeningScore: number
  readingScore: number
  time: number
}
