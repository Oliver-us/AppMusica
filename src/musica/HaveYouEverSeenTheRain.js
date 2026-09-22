import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HaveYouEverSeenTheRain() {

  const letra = `

Have You Ever Seen the Rain?

Someone told me long ago
There's a calm before the storm
I know, it's been comin' for some time
When it's over, so they say
It'll rain a sunny day
I know, shinin' down like water

I wanna know, have you ever seen the rain?
I wanna know, have you ever seen the rain
Comin' down on a sunny day?

Yesterday and days before
Sun is cold and rain is hard
I know, been that way for all my time
Till forever on it goes
Through the circle, fast and slow
I know, it can't stop, I wonder

I wanna know, have you ever seen the rain?
I wanna know, have you ever seen the rain
Comin' down on a sunny day?

Yeah
I wanna know, have you ever seen the rain?
I wanna know, have you ever seen the rain
Comin' down on a sunny day?

Creedence Clearwater Revival
`;

  return (
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>
          Have You Ever Seen the Rain?
        </Text>

        <Text style={estilo.artista}>
          Creedence Clearwater Revival
        </Text>

        <View style={estilo.resumo}>

          <Text style={estilo.letra}>
            {letra}
          </Text>

        </View>

      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
    paddingBottom: 30,
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 10,
  },

  artista: {
    fontSize: 22,
    textAlign: 'center',
    color: '#1f3fb7',
    marginBottom: 25,
  },

  resumo: {
    marginHorizontal: 15,
    backgroundColor: '#ffffff70',
    borderRadius: 7,
    padding: 12,
  },

  letra: {
    fontSize: 19,
    lineHeight: 32,
    color: '#222222',
  },

});