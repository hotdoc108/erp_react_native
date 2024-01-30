import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import OrderDetails from '../screens/order/OrderDetails';

type RootDrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={OrderDetails} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
