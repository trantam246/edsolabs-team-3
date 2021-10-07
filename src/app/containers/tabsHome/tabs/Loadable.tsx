import { lazyLoad } from 'utils/loadable';

export const TabsComponent = lazyLoad(
  () => import('./tabsHome'),
  module => module.TabsComponent,
);
