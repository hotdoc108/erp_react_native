// AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import HelpScreen from '../screens/help/HelpScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import OrderDetails from '../screens/order/OrderDetails';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DrawerNavigator from './DrawerContent';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      ) : (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                position: 'absolute',
                height: 70,
                borderColor: 'black',
                borderWidth: 1,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              },
            }}>
            <Tab.Screen name="Home" component={HomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Fontisto name="home" size={30} color="black" />
                ),
              }}
            />
            <Tab.Screen name="Doc" component={HelpScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="help-center" size={35} color="black" />
                ),
              }} />
            <Tab.Screen name="Slot" component={NotificationScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="notifications" size={30} color="black" />
                ),
              }}
            />
            <Tab.Screen name="News" component={OrderDetails}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Octicons name="list-unordered" size={30} color="black" />
                ),
              }}
            />
          </Tab.Navigator>
          <DrawerNavigator />
        </>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;