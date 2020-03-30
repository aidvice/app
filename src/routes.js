import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '~/pages/Splash';
import Main from '~/pages/Main';
import YourMobilePhone from '~/pages/YourMobilePhone';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Splash" component={Splash} />
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="YourMobilePhone" component={YourMobilePhone} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
