import { lazyLoad } from 'utils/loadable';

export const FeatureList = lazyLoad(
  () => import('./index'),
  module => module.FeatureList,
);
