import { lazyLoad } from 'utils/loadable';

export const pageHome = lazyLoad(
  () => import('./index'),
  module => module.pageHome,
);
