module.exports = ({ env }) => {
  console.log('JWT_SECRET =>', env('JWTSECRET'));
  return {
    'users-permissions': {
      config: {
        jwtSecret: env('JWTSECRET', 'fallback-secret'),
      },
    },
  };
};