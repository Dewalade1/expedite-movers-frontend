const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  // Your existing module.exports
  env: {
    MAIN_BACKENDURL: "https://expeditemoversng.herokuapp.com/",
    DEV_BACKENDURL: "http://localhost:8080",
  },
};

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
