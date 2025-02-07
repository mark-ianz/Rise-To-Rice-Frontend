export type CreateAccountState = {
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  address: string;
  contact_number: string;
  birthdate: Date;
  email: string;
  gender: Gender;
  password: string;
  confirmPassword: string;
  error: string;
  success: string;
  loading: boolean;
};

export type Gender = "male" | "female" | "prefer not to say"