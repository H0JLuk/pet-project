import { User } from '@/entities/user';

export type LoginSchema = {
  username: User['username'];
  password: string;
  isLoading: boolean;
  error?: string;
};
