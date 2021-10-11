import { lazyLoad } from 'utils/loadable';

export const FiterNavSearch = lazyLoad(
  () => import('./borrowCryptocurrency'),
  module => module.FiterNavSearch,
);
