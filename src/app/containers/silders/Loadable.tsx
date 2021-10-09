import { lazyLoad } from 'utils/loadable';

export const Sliders = lazyLoad(
  () => import('./index'),
  module => module.Sliders,
);
