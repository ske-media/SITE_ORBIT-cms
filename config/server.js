module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS', [
        "nGy4/wPymk6tJLuEJZv0Y4cUlRrG8NSG3gqf9GkJX9M=",
        "K9j4r/wL4rB2tMhuB4Ev9sXjKl0N5A8y7Zq2bP3Fq8s="
      ]),
    },
  });