import { UserSchema } from '@/entities/user';
import { LoginSchema } from '@/features/AuthByUsername';

export type StateSchema = {
  user: UserSchema;
  loginForm: LoginSchema;
  loginApi: any; // FIXME: correct type
};
