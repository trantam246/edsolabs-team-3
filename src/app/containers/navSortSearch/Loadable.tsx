import { lazyLoad } from 'utils/loadable';

export const NavSortSearch = lazyLoad(
  () => import('./index'),
  module => module.NavSortSearch,
);
