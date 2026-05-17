import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingTabs = () => {
  return (
    <View style={styles.container}>
      <Text>SettingTabs</Text>
    </View>
  )
}

export default SettingTabs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})