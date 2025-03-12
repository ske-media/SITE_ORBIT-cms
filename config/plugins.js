module.exports = ({ env }) => {
  console.log('JWT_SECRET =>', env('jwtSecret'));
  return {
    'users-permissions': {
      config: {
        jwtSecret: env('jwtSecret', 'fallback-secret'),
      },
    },
  };
};