/*
 * @Author       : 胡昊
 * @Date         : 2021-01-08 19:13:05
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-01-09 14:52:28
 * @FilePath     : /ThirtyDaysOfReactNative/index.js
 * @Description  :  
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
