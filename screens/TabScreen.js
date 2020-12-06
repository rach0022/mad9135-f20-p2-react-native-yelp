import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStackNavigator from './home/HomeStackNavigator'
import CoffeeStackNavigator from './coffee/CoffeeStackNavigator'
import FoodTrucksStackNavigator from './foodtrucks/FoodTrucksStackNavigator'
import BakeriesStackNavigator from './bakeries/BakeriesStackNavigator'
import RestaurantsStackNavigator from './restaurants/RestaurantsStackNavigator'
import { themes } from '../styles'


// create the tab navigation between the 5 main views (filters): home, coffee, foodtrucks, bakeries, restaursnts
const Tab = createBottomTabNavigator()

export default function TabScreen() {
    // get a reference to my current theme
    const theme = themes.light

    // the tab navigator will make 5 Tab.Screens for the different tabs
    return (
        <Tab.Navigator tabBarOptions={theme.tabBarOptions}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        const iconName = focused ? 'md-locate' : 'ios-locate'
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarLabel: 'Nearby'
                }}
            />
            <Tab.Screen
                name="Coffee"
                component={CoffeeStackNavigator}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        const iconName = focused ? 'ios-cafe' : 'md-cafe'
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarLabel: 'Coffee'
                }}
            />
            <Tab.Screen
                name="Food Trucks"
                component={FoodTrucksStackNavigator}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        const iconName = focused ? 'ios-car' : 'md-car'
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarLabel: 'Food Trucks'
                }}
            />
            <Tab.Screen
                name="Restaurants"
                component={RestaurantsStackNavigator}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        const iconName = focused ? 'ios-restaurant' : 'md-restaurant'
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarLabel: 'Restaurants'
                }}
            />
            <Tab.Screen
                name="Bakeries"
                component={BakeriesStackNavigator}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        const iconName = focused ? 'ios-nutrition' : 'md-egg'
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarLabel: 'Bakeries'
                }}
            />
        </Tab.Navigator>
    )
}
