import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const Stack = createStackNavigator();
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';

import {Provider} from 'react-redux';
import {init} from '@rematch/core';
import createPersistPlugin, {getPersistor} from '@rematch/persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import storage from 'redux-persist/lib/storage';
import {models} from './src/models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loadingPlugin from '@rematch/loading';
import {combineReducers} from 'redux';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import persistStore from 'redux-persist/es/persistStore';
import { user } from './src/models/user';

 
const middleWare = [];
const reduxConfig = {
  combineReducers: persistCombineReducers.bind(null, {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
    whitelist: ['user'],
    
  }),
  middleWare: middleWare,
};
const store = init({
  models:{user},
  plugins: [loadingPlugin()],
  redux: reduxConfig,
});

const persist = persistStore(store)

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
