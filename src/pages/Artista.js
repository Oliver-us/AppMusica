import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Artista(props) {
  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}>
        Os melhores Artistas
      </Text>

      <FlatList
        data={artistas}

        renderItem={({ item }) => (
          <View style={estilo.artista}>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.buttom);
              }}
            >

              <Text style={estilo.txtArtista}>
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

              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons
                  name="account-heart"
                  size={20}
                  color="blue"
                />
                {item.seguidores} Seguidores
              </Text>

            </View>

          </View>
        )}

        keyExtractor={(item) => item.uid.toString()}
      />

    </View>
  );
}

const artistas = [
  {
    uid: 1,
    nome: 'Bon Jovi',
    like: 234,
    seguidores: 2345,
    buttom: 'BonJovi'
  },

  {
    uid: 2,
    nome: 'Guns N Roses',
    like: 876,
    seguidores: 9876,
    buttom: 'GunsnRoses'
  },

  {
    uid: 3,
    nome: 'Foreigner',
    like: 2345,
    seguidores: 6023,
    buttom: 'Foreigner'
  },

  {
    uid: 4,
    nome: 'Creedence',
    like: 6242,
    seguidores: 2654,
    buttom: 'Creedence'
  },
];

const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
  },

  artista: {
    backgroundColor: '#a2f5e9',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
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
  },

  txtArtista: {
    fontSize: 20,
  },

  seguidores: {
    fontSize: 14,
  },

});