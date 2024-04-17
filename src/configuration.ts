const configuration = {
  apiUrl: process.env.REACT_APP_API_URL,
  apiToken: process.env.REACT_APP_API_TOKEN,
  auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN,
  auth0ClientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  auth0RedirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  protectedApiUrl: process.env.REACT_APP_PROTECTED_API_URL,
};

export default configuration;