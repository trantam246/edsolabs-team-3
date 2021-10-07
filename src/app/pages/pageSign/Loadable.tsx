import { lazyLoad } from 'utils/loadable';

export const PageSign = lazyLoad(
  () => import('./index'),
  module => module.PageSign,
);
