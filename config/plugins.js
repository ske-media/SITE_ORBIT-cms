module.exports = ({ env }) => {
  console.log('JWT_SECRET =>', env('JWT_SECRET'));
  return {
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'fallback-secret'),
      },
    },
  };
};