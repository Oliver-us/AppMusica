import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function IWantToKnowWhatLoveIs() {

  const letra = `

I Want to Know What Love Is

I've gotta take a little time
A little time to think things over
I better read between the lines
In case I need it when I'm older
Now this mountain I must climb
Feels like the world upon my shoulders
Through the clouds, I see love shine
It keeps me warm as life grows colder
In my life, there's been heartache and pain
I don't know if I can face it again
Can't stop now, I've travelled so far
To change this lonely life
I wanna know what love is
I want you to show me
I wanna feel what love is
I know you can show me, oh
I'm gonna take a little time
A little time to look around me
I've got nowhere left to hide
It looks like love has finally found me
In my life, there's been heartache and pain
I don't know if I can face it again
I can't stop now, I've travelled so far
To change this lonely life
I wanna know what love is
I want you to show me
I wanna feel what love is
I know you can show me
I wanna know what love is
I want you to show me (and I wanna feel)
I wanna feel what love is (I know)
I know you can show me
I wanna know what love is
(Love that you feel inside)
I want you to show me
(And I'm feeling so much love)
I wanna feel what love is
(I know you just can't hide)
I know you can show me, oh
I wanna know what love is
(Let's talk about love)
I want you to show me
(I wanna feel it, and I wanna feel it, too)
I wanna feel what love is
(And I know, and I know)
I know you can show me
I wanna know what love is (I wanna know)
I want you to show me
(I wanna know, I wanna know, I wanna know)
I wanna feel what love is (I wanna feel)
I know you can show me

Foreigner
`;

  return (
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>
          I Want to Know What Love Is
        </Text>

        <Text style={estilo.artista}>
          Foreigner
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