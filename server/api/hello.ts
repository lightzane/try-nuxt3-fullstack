// defineEventHandler() --> This is the handler for request and response
// server/api/hello => /api/hello
// server/api/pokemon/[name].ts => /api/pokemon/:name
// server/routes/newsletter => /newsletter
export default defineEventHandler((event) => {
  return {
    hello: 'hello',
  };
});
