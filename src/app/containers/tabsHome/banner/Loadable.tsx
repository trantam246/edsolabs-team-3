import { lazyLoad } from 'utils/loadable';

export const BannerTabs = lazyLoad(
  () => import('./bannerTabs'),
  module => module.BannerTabs,
);
