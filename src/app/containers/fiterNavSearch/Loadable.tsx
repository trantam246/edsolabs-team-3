import { lazyLoad } from 'utils/loadable';

export const FiterNavSearch = lazyLoad(
  () => import('./index'),
  module => module.FiterNavSearch,
);
