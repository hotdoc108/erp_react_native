import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

const OrderDetails: React.FC<{ navigation: any }> = ({ navigation })=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigation.navigate('Signup');
  };
  return (
    <View>
      <Text>Order Details</Text>
      <TouchableOpacity style={{ borderRadius: 8, overflow: 'hidden' }}>
        <Button title="Login" onPress={handleLogin} />
      </TouchableOpacity>
    </View>
  )
}

export default OrderDetails