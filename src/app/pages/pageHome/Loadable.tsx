import { lazyLoad } from 'utils/loadable';

export const PageHome = lazyLoad(
  () => import('./index'),
  module => module.PageHome,
);
