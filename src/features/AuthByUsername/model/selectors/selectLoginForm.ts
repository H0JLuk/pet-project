import { StateSchema } from '@/app/providers/store/config/StateSchema';

export const selectLoginForm = (state: StateSchema) => state.loginForm;
