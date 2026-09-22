import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BedOfRoses from './musica/BedOfRoses';
import NovemberRain from './musica/NovemberRain';
import IWantToKnowWhatLoveIs from './musica/IWantToKnowWhatLoveIs';
import HaveYouEverSeenTheRain from './musica/HaveYouEverSeenTheRain';

import Musica from './pages/Musica';

const Stack = createStackNavigator();

export default function RotasMusica() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Musica"
        component={Musica}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BedOfRoses"
        component={BedOfRoses}
        options={{ title: 'Bed of Roses' }}
      />

      <Stack.Screen
        name="NovemberRain"
        component={NovemberRain}
        options={{ title: 'November Rain' }}
      />

      <Stack.Screen
        name="IWantToKnowWhatLoveIs"
        component={IWantToKnowWhatLoveIs}
        options={{ title: 'I Want to Know What Love Is' }}
      />

      <Stack.Screen
        name="HaveYouEverSeenTheRain"
        component={HaveYouEverSeenTheRain}
        options={{ title: 'Have You Ever Seen the Rain?' }}
      />

    </Stack.Navigator>
  );
}