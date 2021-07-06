//Usuário já está autenticado

import React from 'react';
import Feed from '../pages/Feed';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
   <AppStack.Navigator>
      <AppStack.Screen name="Feed" component={Feed}/>
   </AppStack.Navigator>
);

export default AppRoutes;