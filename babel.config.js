/*
 * @Author       : 胡昊
 * @Date         : 2021-01-08 19:13:05
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-01-09 15:17:42
 * @FilePath     : /ThirtyDaysOfReactNative/babel.config.js
 * @Description  :
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@',
            rootPathSuffix: 'src',
          },
        ],
      },
    ],
  ],
};
