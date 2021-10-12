import { lazyLoad } from 'utils/loadable';

export const Footer = lazyLoad(
  () => import('./index'),
  module => module.Footer,
);
