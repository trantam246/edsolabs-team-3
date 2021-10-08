import { lazyLoad } from 'utils/loadable';

export const NumberOfResult = lazyLoad(
  () => import('./index'),
  module => module.NumberOfResult,
);
