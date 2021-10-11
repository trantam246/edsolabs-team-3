import { lazyLoad } from 'utils/loadable';

export const PageSearchLend = lazyLoad(
  () => import('./index'),
  module => module.PageSearchLend,
);
