import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function BonJovi() {
  return (
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>Bon Jovi</Text>

        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/bonjovi1.jpg')}
              />
              <Text style={estilo.rotulo}>Bon Jovi</Text>
            </View>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/bonjovi2.jpg')}
              />
              <Text style={estilo.rotulo}>Bon Jovi</Text>
            </View>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/bonjovi3.jpg')}
              />
              <Text style={estilo.rotulo}>Bon Jovi</Text>
            </View>

          </ScrollView>
        </View>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Bon Jovi é uma banda americana de rock formada em 1983,
            em Sayreville, Nova Jersey, liderada pelo vocalista Jon Bon Jovi.
            A banda alcançou grande sucesso internacional a partir da década
            de 1980, tornando-se uma das bandas mais conhecidas do rock.
            Entre seus maiores sucessos estão Livin' on a Prayer,
            You Give Love a Bad Name, Wanted Dead or Alive e It's My Life.
            Ao longo de sua carreira, o Bon Jovi lançou diversos álbuns,
            realizou grandes turnês internacionais e conquistou milhões
            de fãs ao redor do mundo.
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
    fontWeight: 700,
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