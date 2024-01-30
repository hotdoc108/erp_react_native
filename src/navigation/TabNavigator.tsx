// TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import Extra from '../screens/help/HelpScreen';
import More from '../screens/notification/NotificationScreen';
import Details from '../screens/order/OrderDetails';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          borderColor: 'black',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="call" size={30} color="#900" />
          ),
        }}
      />
      <Tab.Screen name="Doc" component={Extra} />
      <Tab.Screen name="Slot" component={More} />
      <Tab.Screen name="News" component={Details} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
