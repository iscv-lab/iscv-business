import { IIGShiftTest } from '@globaltypes/iig'
import * as Yup from 'yup'
export type IForm = {
  employeeId?: number
  testDate: string | undefined
  shiftTest: IIGShiftTest | undefined
  expireDate: string | undefined
  listeningScore: number | undefined
  readingScore: number | undefined
}

export const getSchema = () => {
  return Yup.object({
    employeeId: Yup.number().required('required'),
    testDate: Yup.date().required('required'),
    shiftTest: Yup.number()
      .required('required')
      .oneOf(Object.values(IIGShiftTest) as IIGShiftTest[]),
    expireDate: Yup.date().required('required'),
    listeningScore: Yup.number().min(5, 'min5').max(495, 'max495').required('required'),
    readingScore: Yup.number().min(5, 'min5').max(495, 'max495').required('required')
  })
}
