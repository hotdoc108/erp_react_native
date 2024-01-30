import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import TopContainer from '../../components/TopContainer';

const HelpScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TopContainer navigation={undefined} />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 15 : 0,
  },
});
export default HelpScreen