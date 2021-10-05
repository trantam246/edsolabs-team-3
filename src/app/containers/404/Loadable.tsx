import { lazyLoad } from 'utils/loadable';

export const Not404 = lazyLoad(
  () => import('./index'),
  module => module.Not404,
);
