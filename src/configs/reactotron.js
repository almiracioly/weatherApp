import Reactotron from 'reactotron-react-native';
// import AsyncStorage from '@react-native-community/async-storage';

const reactotron = Reactotron.configure({
  host: '192.168.122.1',
})
  .useReactNative({
    storybook: true,
  })
  // .setAsyncStorageHandler(AsyncStorage)
  .connect();

console.log = Reactotron.log;

export default reactotron;
