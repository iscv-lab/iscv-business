export enum Professional {
  NORMAL = "normal",
  EDUCATION = "education",
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
