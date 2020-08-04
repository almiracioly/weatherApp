/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/main/App';
import {name as appName} from './app.json';
import './src/configs/reactotron';
import './src/configs/momentCustomize';

AppRegistry.registerComponent(appName, () => App);
