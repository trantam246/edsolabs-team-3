import { lazyLoad } from 'utils/loadable';

export const NftShop = lazyLoad(
  () => import('./index'),
  module => module.NftShop,
);
