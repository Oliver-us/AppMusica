import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Artista from './RotasButtom';
import Home from './pages/Home';
import Musica from './RotasMusica';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >

      <Tab.Screen
        name="Artista"
        component={Artista}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-music"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Musica"
        component={Musica}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="music"
              color={color}
              size={size}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}