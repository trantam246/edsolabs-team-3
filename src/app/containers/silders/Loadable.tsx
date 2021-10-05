import { lazyLoad } from 'utils/loadable';

export const Silder = lazyLoad(
  () => import('./index'),
  module => module.Silder,
);
