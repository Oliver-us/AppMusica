import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function BedOfRoses() {

  const letra = `

Bed of Roses

Sitting here wasted and wounded
With this old piano
Trying hard to capture
The moment this morning I don't know
'Cause a bottle of vodka
Still lodged in my head
And some blonde gave me nightmares
Think that she's still in my bed
As I dream about movies
They won't make of me when I'm dead
With an ironclad fist
I wake up and French kiss the morning
While some marching band keeps
Its own beat in my head
While we're talking
About all of the things that I long to believe
About love the truth and what you mean to me
And the truth is, baby you're all that I need
I wanna lay you down in a bed of roses
For tonight I sleep on a bed of nails
Oh, I wanna be just as close as the Holy Ghost is
And lay you down on a bed of roses
Well I'm so far away
Step that I takes on my way home
A king's ransom in dimes I give each night
To see through this payphone
Still I run out of time
Or it's hard to get through
'Til' the bird on the wire flies me back to you
I'll just close my eyes and whisper
Baby blind love is true
I wanna lay you down in a bed of roses
For tonight I sleep on a bed of nails
Oh, I wanna be just as close as the Holy Ghost is
And lay you down on a bed of roses
Well, this hotel bar's hangover whiskey's gone dry
The barkeeper's wig's crooked
And she's giving me the eye
I might have said yeah
But I laughed so hard I think I died, ooh yeah
Now as you close your eyes
Know I'll be thinking about you
While my mistress she calls me
To stand in her spotlight again
Tonight I won't be alone
But you know that don't mean I'm not lonely
I've got nothing to prove
For it's you that I'd die to defend
I wanna lay you down in a bed of roses
For tonight I sleep on a bed of nails
Oh, I wanna be just as close as the Holy Ghost is
And lay you down
I wanna lay you down in a bed of roses
For tonight I sleep on a bed of nails
I wanna be just as close as the Holy Ghost is
And lay you down
On a bed of roses
`;

  return (
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>
          Bed of Roses
        </Text>

        <Text style={estilo.artista}>
          Bon Jovi
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