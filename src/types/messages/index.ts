import { IEmployee } from "..";

export enum ERole {
  EMPLOYEE = 'employee',
  BUSINESS = 'business'
}

export type IRecent = IEmployee & { updatedAt: Date }
