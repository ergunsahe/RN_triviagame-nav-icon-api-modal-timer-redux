import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Intro, Questions, Finish} from './pages';

import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { initialValue } from './context/store';
import { reducer } from './context/reducer';

const Stack = createStackNavigator();

const store= createStore(reducer, initialValue )

function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Finish" component={Finish} />
          <Stack.Screen name="Questions" component={Questions} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
