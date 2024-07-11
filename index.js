import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {registerRootComponent} from 'expo';

registerRootComponent(App);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(registration => {
        console.log(
          'Service Worker registered with scope:',
          registration.scope,
        );
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
