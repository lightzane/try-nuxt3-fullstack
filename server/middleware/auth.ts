export default defineEventHandler((event) => {
  // * A middleware is an event that needs to be handled first
  const auth = getCookie(event, 'pokemon-auth');
  const currentUrl = getRequestURL(event);

  console.log('[my..Server] Cookie:', auth);

  if (auth || currentUrl.pathname === '/login') {
    return;
  } else {
    return sendRedirect(event, '/login', 302); // the default is already 302, but we just explicitly put it just for reference
  }
});
