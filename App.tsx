import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { LoginScreen } from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { CompareScreen } from './src/screens/CompareScreen';
import { CatalogScreen } from './src/screens/CatalogScreen';
import { AnalyticsScreen } from './src/screens/AnalyticsScreen';
import { SupportScreen } from './src/screens/SupportScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <>
        <StatusBar style="light" />
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      </>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#002C6C',
          tabBarInactiveTintColor: '#94A3B8',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#E2E8F0',
            height: 62,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Comparador') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Catálogo') {
              iconName = focused ? 'car-sport' : 'car-sport-outline';
            } else if (route.name === 'Análise') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Suporte') {
              iconName = focused ? 'help-buoy' : 'help-buoy-outline';
            }

            return <Ionicons name={iconName} size={22} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Comparador" component={CompareScreen} />
        <Tab.Screen name="Catálogo" component={CatalogScreen} />
        <Tab.Screen name="Análise" component={AnalyticsScreen} />
        <Tab.Screen name="Suporte" component={SupportScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}