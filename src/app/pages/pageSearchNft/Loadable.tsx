import { lazyLoad } from 'utils/loadable';

export const PageSearchNft = lazyLoad(
  () => import('./index'),
  module => module.PageSearchNft,
);
