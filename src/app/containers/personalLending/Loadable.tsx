import { lazyLoad } from 'utils/loadable';

export const PersonnalLending = lazyLoad(
  () => import('./index'),
  module => module.PersonalLending,
);
