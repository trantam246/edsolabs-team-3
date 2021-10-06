import { lazyLoad } from 'utils/loadable';

export const Suggest = lazyLoad(
  () => import('./index'),
  module => module.Suggest,
);
