export interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  user_type: UserType;
  birthday: Date | undefined;
  username: string;
  password: string;
}

export enum UserType {
  USER = 'user',
  ADMIN = 'admin'
}
