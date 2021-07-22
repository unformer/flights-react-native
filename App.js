import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useFonts } from 'expo-font'
import Menu from './components/menu'
import { StyleSheet, SafeAreaView } from 'react-native'

export default function App() {

  const [loaded] = useFonts({
    Abel: require('./assets/fonts/Abel.ttf'),
    SFPro: require('./assets/fonts/SFPro.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.appWrap}>
      <Menu />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appWrap: {
    flex: 1,
  },
})
