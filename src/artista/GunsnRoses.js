import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function GunsnRoses() {
  return (
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>
          Guns N Roses
        </Text>

        <View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >

            <View>
              <Image
                resizeMode="stretch"
                style={estilo.img}
                source={require('../../assets/gunsnroses1.jpg')}
              />

              <Text style={estilo.rotulo}>
                Guns N Rose
              </Text>
            </View>

            <View>
              <Image
                resizeMode="stretch"
                style={estilo.img}
                source={require('../../assets/gunsnroses2.jpg')}
              />

              <Text style={estilo.rotulo}>
                Guns N Rose
              </Text>
            </View>

            <View>
              <Image
                resizeMode="stretch"
                style={estilo.img}
                source={require('../../assets/gunsnroses3.jpg')}
              />

              <Text style={estilo.rotulo}>
                Guns N Rose
              </Text>
            </View>

          </ScrollView>

        </View>

        <View style={estilo.resumo}>

          <Text style={estilo.textoResumo}>
            Guns N Roses é uma banda americana de rock formada em
            Los Angeles, Califórnia. A banda alcançou grande sucesso
            internacional e ficou conhecida por músicas como Sweet
            Child O' Mine, November Rain e Welcome to the Jungle.
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
  },

  img: {
    width: 330,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 30,
  },

  rotulo: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },

  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#ffffff70',
    borderRadius: 7,
    padding: 8,
  },

  textoResumo: {
    fontSize: 19,
  },

});