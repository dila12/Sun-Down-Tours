/**
 * Vercel serverless entry for Angular SSR.
 * Routes HTML requests through the Express `reqHandler` so RESPONSE_INIT
 * (true HTTP 404) and edge 301 middleware run in production.
 */
export default import('../dist/Travelwebsite/server/server.mjs').then(
  (module) => module.reqHandler,
);
