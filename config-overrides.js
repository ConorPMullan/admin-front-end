const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styled': path.resolve(__dirname, 'src/styled'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  };
  return config;
};
