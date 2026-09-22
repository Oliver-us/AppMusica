import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Foreigner() {
  return (
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>
          Foreigner
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
                source={require('../../assets/foreigner1.jpg')}
              />

              <Text style={estilo.rotulo}>
                Foreigner
              </Text>
            </View>

            <View>
              <Image
                resizeMode="stretch"
                style={estilo.img}
                source={require('../../assets/foreigner2.jpg')}
              />

              <Text style={estilo.rotulo}>
                Foreigner
              </Text>
            </View>

            <View>
              <Image
                resizeMode="stretch"
                style={estilo.img}
                source={require('../../assets/foreigner3.jpg')}
              />

              <Text style={estilo.rotulo}>
                Foreigner
              </Text>
            </View>

          </ScrollView>

        </View>

        <View style={estilo.resumo}>

          <Text style={estilo.textoResumo}>
            Foreigner é uma banda de rock formada em 1976,
            conhecida internacionalmente por seus grandes sucessos
            e por músicas como I Want to Know What Love Is,
            Cold as Ice e Juke Box Hero.
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