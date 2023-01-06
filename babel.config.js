module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@App': './src/App.tsx',
            '@components': './src/components',
            '@views': './src/views',
            '@zustandStore': './src/zustand/index',
            '@hooks': './src/hooks/index',
            '@mocks': './src/mocks/index',
            '@layouts': './src/layouts/index',
            '@utils': './src/utils/index',
            '@test-utils': './src/test-utils/index',
            '@api': './src/api',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
