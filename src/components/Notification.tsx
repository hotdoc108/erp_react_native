// DoctorCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notification: React.FC = () => {
  return (
    <View style={styles.card}>
      <Text>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    marginBottom: 16,
    height:"auto",
    alignItems:'center',
    backgroundColor:'grey'
  },
});

export default Notification;
