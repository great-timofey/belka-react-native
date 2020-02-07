const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@global': path.resolve(__dirname, 'src/global'),
      '@assets': path.resolve(__dirname, 'assets'),
      '@navigation': path.resolve(__dirname, 'src/navigation'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@scenes': path.resolve(__dirname, 'src/scenes'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
}
