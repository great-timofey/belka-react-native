module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@scenes': './src/scenes',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@global': './src/global',
          '@assets': './assets',
          '@services': './src/services',
        },
      },
    ],
  ],
}
