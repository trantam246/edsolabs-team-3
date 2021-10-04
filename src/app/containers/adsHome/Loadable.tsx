import { lazyLoad } from 'utils/loadable';

export const AdsHome = lazyLoad(
  () => import('./index'),
  module => module.AdsHome,
);
