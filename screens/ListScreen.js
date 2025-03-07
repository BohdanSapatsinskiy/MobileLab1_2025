import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerLogo} source={require('../img/logo.png')} />
        <Text style={[styles.nameHeader, styles.text]}>Music List</Text>
      </View>

        <View style={styles.navPanel}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.navElem} source={require('../img/home.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('List')}>
                <Image style={styles.navElem} source={require('../img/list.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Authorization')}>
                <Image style={styles.navElem} source={require('../img/person.png')} />
            </TouchableOpacity>
        </View>

      <View style={styles.mainBlock}>
        <Text style={[styles.titleBlock, styles.text]}>Список</Text>
        
        <View style={[styles.contentBlock, styles.blockToRow]}>
          <Image style={styles.bigAlbumImg} source={require('../img/notfound.png')} />
          <Image style={styles.bigAlbumImg} source={require('../img/notfound.png')} />
          <Image style={styles.bigAlbumImg} source={require('../img/notfound.png')} />
          <Image style={styles.bigAlbumImg} source={require('../img/notfound.png')} />
          <Image style={styles.bigAlbumImg} source={require('../img/notfound.png')} />
        </View>
      </View>
    </View>
  );
}
