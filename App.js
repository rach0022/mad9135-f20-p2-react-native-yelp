import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { themes } from './styles'
// import my needed screens to display the app
import TabScreen from './screens/TabScreen'
import SettingsStackNavigator from './screens/settings/SettingsStackNavigator'

// create our drawer nav element, will be used to switch between
// main app, settings, and saved venues*
const AppDrawer = createDrawerNavigator()

export default function App() {
  // create our reference to the light theme 
  const theme = themes.light
  // console.log(API_KEY) // testing if API key will work 
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppDrawer.Navigator
          initialRoute="Home"
          drawerPosition="right"
          drawerType="front"
        >
          <AppDrawer.Screen name="Home" component={TabScreen} />
          <AppDrawer.Screen name="Settings" component={SettingsStackNavigator} />
        </AppDrawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}