import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import TopContainer from '../../components/TopContainer'
import Notification from '../../components/Notification'


const NotificationScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TopContainer navigation={undefined} />
      </View>
      <ScrollView>
        <View style={{ display: 'flex', paddingTop: 10 }}>
          <View style={styles.cardContainer}>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 15 : 0,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
},
});
export default NotificationScreen