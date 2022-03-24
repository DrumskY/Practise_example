import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DevicesScreen from './components/DevicesScreen';
import ConnectionScreen from './components/ConnectionScreen';


const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer >

      <Tab.Navigator>
        <Tab.Group>
          <Tab.Screen name="Devices" component={DevicesScreen} />
        </Tab.Group>

        <Tab.Group screenOptions={{ presentation: 'modal' }}>
          <Tab.Screen name="Connection" component={ConnectionScreen} />
        </Tab.Group>
      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default App;
