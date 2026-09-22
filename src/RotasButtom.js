import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BonJovi from './artista/BonJovi';
import Creedence from './artista/Creedence';
import GunsnRoses from './artista/GunsnRoses';
import Foreigner from './artista/Foreigner';

import Artista from './pages/Artista';

const Stack = createStackNavigator();

export default function RotasButtom() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Artista"
        component={Artista}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BonJovi"
        component={BonJovi}
        options={{ title: 'Bon Jovi' }}
      />

      <Stack.Screen
        name="GunsnRoses"
        component={GunsnRoses}
        options={{ title: 'Guns N Roses' }}
      />

      <Stack.Screen
        name="Foreigner"
        component={Foreigner}
        options={{ title: 'Foreigner' }}
      />

      <Stack.Screen
        name="Creedence"
        component={Creedence}
        options={{ title: 'Creedence' }}
      />

    </Stack.Navigator>
  );
}