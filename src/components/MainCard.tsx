// DoctorCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <Text>MainCard</Text>
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
    height: 200,
    alignItems:'center',
    backgroundColor:'grey'
  },
});

export default MainCard;
