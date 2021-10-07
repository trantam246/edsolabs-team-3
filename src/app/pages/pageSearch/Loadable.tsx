import { lazyLoad } from 'utils/loadable';

export const PageSearch = lazyLoad(
  () => import('./index'),
  module => module.PageSearch,
);
