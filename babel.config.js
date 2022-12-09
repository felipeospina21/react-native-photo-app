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
            '@shared': './src/shared',
            '@views': './src/views',
            '@zustandStore': './src/zustand/index',
            '@hooks': './src/hooks/index',
            '@mocks': './src/mocks/index',
            '@layouts': './src/layouts/index',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
