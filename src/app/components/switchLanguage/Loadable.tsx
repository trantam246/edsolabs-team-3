import { lazyLoad } from 'utils/loadable';

export const SwitchLanguage = lazyLoad(
  () => import('./index'),
  module => module.SwitchLanguage,
);
