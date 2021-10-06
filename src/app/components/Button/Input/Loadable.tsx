/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const ButtonComponent = lazyLoad(
  () => import('./index'),
  module => module.ButtonComponent,
);
