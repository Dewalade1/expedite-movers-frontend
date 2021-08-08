import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://40c06388d6504607ba9a5549eee9e26d@o471166.ingest.sentry.io/5883606',
  tracesSampleRate: 1.0,
});
