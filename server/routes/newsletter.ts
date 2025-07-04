// [IMPORTANT] If you have the same route (e.g. `pages/newsletter.vue`)
// Then it will not be rendered as Nuxt prioritizes the server-side

// server/api/hello => /api/hello
// server/api/pokemon/[name].ts => /api/pokemon/:name
// server/routes/newsletter => /newsletter
export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://google.com');
  // * Server routes are used for intercepting requests and return a response to the user
});
