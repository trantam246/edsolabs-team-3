import { lazyLoad } from 'utils/loadable';

export const LoginAndRegister = lazyLoad(
  () => import('./index'),
  module => module.LoginAndRegister,
);
