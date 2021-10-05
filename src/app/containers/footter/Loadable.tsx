import { lazyLoad } from 'utils/loadable';

export const Footter = lazyLoad(
  () => import('./index'),
  module => module.Footter,
);
