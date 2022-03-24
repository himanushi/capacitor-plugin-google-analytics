import { registerPlugin } from '@capacitor/core';

import type { CapacitorGoogleAnalyticsPlugin } from './definitions';

const CapacitorGoogleAnalytics = registerPlugin<CapacitorGoogleAnalyticsPlugin>('CapacitorGoogleAnalytics', {
  web: () => import('./web').then(m => new m.CapacitorGoogleAnalyticsWeb()),
});

export * from './definitions';
export { CapacitorGoogleAnalytics };
