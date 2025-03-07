import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';

export default function AuthorizationScreen({ navigation }) {

  return (
    <ScrollView style={styles.container}>
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
        <Text style={[styles.titleBlock, styles.text]}>Реєстрація</Text>
        <View style={styles.regForm}>
          <Text style={styles.label}>Ел. пошта</Text>
          <TextInput
            style={styles.input}
            placeholder="Ел. пошту"
          />

          <Text style={styles.label}>Пароль</Text>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry
          />

          <Text style={styles.label}>Пароль (повторіть пароль)</Text>
          <TextInput
            style={styles.input}
            placeholder="Повторіть пароль"
            secureTextEntry
          />

          <Text style={styles.label}>Ваше прізвище</Text>
          <TextInput
            style={styles.input}
            placeholder="Введіть ваше прізвище"
          />

          <Text style={styles.label}>Ваше ім'я</Text>
          <TextInput
            style={styles.input}
            placeholder="Введіть ваше ім'я"
          />

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Authorization')}>
            <Text style={styles.label}>Надіслати</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

