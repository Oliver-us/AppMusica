import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Musica(props) {
  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}>
        As Melhores Músicas
      </Text>

      <FlatList
        data={musicas}

        renderItem={({ item }) => (
          <View style={estilo.musica}>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.buttom);
              }}
            >

              <Text style={estilo.txtMusica}>
                {item.nome}
              </Text>

            </TouchableOpacity>

            <View style={estilo.rede}>

              <Text>
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={20}
                  color="#F00"
                />
                {item.like} Curtidas
              </Text>

              <Text>
                <MaterialCommunityIcons
                  name="play-circle"
                  size={20}
                  color="blue"
                />
                {item.reproducoes} Reproduções
              </Text>

            </View>

          </View>
        )}

        keyExtractor={(item) => item.uid.toString()}
      />

    </View>
  );
}

const musicas = [
  {
    uid: 1,
    nome: 'Bed of Roses',
    like: 234,
    reproducoes: 3426,
    buttom: 'BedOfRoses'
  },

  {
    uid: 2,
    nome: 'November Rain',
    like: 876,
    reproducoes: 9876,
    buttom: 'NovemberRain'
  },

  {
    uid: 3,
    nome: 'I Want to Know What Love Is',
    like: 2345,
    reproducoes: 6023,
    buttom: 'IWantToKnowWhatLoveIs'
  },

  {
    uid: 4,
    nome: 'Have You Ever Seen the Rain?',
    like: 6242,
    reproducoes: 2654,
    buttom: 'HaveYouEverSeenTheRain'
  },
];

const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
  },

  musica: {
    backgroundColor: '#a2f5e9',
    justifyContent: 'center',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    marginVertical: 30,
  },

  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  txtMusica: {
    fontSize: 20,
  },

});