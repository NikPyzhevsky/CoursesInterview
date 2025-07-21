module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'react-native-unistyles/plugin',
      {
        root: 'src',
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
        ],
        root: ['./src'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
