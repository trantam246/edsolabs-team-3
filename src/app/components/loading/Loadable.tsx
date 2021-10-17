/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const Loading = lazyLoad(
  () => import('./index'),
  module => module.Loading,
);
