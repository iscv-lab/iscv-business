export enum Professional {
  NORMAL = 0,
  EDUCATION = 1,
}

export type FormikData = {
  avatar: any;
  fullname: string;
  phone: string;
  professional: Professional;
  email: string;
  github: string;
  linkedin: string;
  category: string;
};
