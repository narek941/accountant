const env = process.env.ENV || 'development';

const configs = {
  development: {
    API: 'https://www.acc-accountant.am/api-docs',
    EMAIL_USER: 'accforms2345678@gmail.com',
    EMAIL_PASS: 'goubmgeeyukyzjyv',
    EMAIL_ACC: 'qolyan@list.ru',
  },
  production: {
    API: '...',
    EMAIL_USER: 'accforms2345678@gmail.com',
    EMAIL_PASS: 'goubmgeeyukyzjyv',
    EMAIL_ACC: 'info@acc-accountant.am',
  },
}[env];

export default configs;
