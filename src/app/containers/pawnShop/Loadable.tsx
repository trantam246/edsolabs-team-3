import { lazyLoad } from 'utils/loadable';

export const PawnShop = lazyLoad(
  () => import('./index'),
  module => module.PawnShop,
);
