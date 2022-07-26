import React from 'react';
import { 
  View,
  Text ,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {Lista} from '../Lista';


let feed:[
  {
  id: '1',
  nome: 'Lucas Silva',
  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoperfil1.png',
  imgPublicacao: 'https://sujeitoprogramador.com/instareact.foto1.png',
  likeada: false,
  likers: 0
},
{
  id: '1',
  nome: 'Lucas Silva',
  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoperfil1.png',
  imgPublicacao: 'https://sujeitoprogramador.com/instareact.foto1.png',
  likeada: false,
  likers: 0
},
{
  id: '1',
  nome: 'Lucas Silva',
  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoperfil1.png',
  imgPublicacao: 'https://sujeitoprogramador.com/instareact.foto1.png',
  likeada: false,
  likers: 0
},

]

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image 
          style={styles.logo}
          source={require('./src/images/logo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          style={styles.send}
          source={require('./src/images/send.png')}/>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator = {false}
        data={feed}
        renderItem={ ({item}) => <Lista data={item}/>}
      >


      </FlatList>

    </View>
  );
}


const styles = StyleSheet.create({
  container:{

  },
  logo:{

  },
  send:{
    width: 23,
    height: 23
  },
  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  }

})