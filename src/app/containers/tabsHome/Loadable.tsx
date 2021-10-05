import { lazyLoad } from 'utils/loadable';

export const TabsHome = lazyLoad(
  () => import('./index'),
  module => module.TabsHome,
);
