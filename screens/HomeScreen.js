import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

import styles from '../styles/styles.js';

export default function HomeScreen({ navigation }) {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.headerLogo}
                    source={require('../img/logo.png')}
                />
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
                <Text style={[styles.titleBlock, styles.text]}>Новинки</Text>
                
                <View style={styles.contentBlock}>
                    {['Назва пісні 1', 'Назва пісні 2', 'Назва пісні 3'].map((song, index) => (
                        <View key={index} style={styles.card}>
                            <View style={styles.cardPart}>
                                <Image
                                    style={styles.cardImg}
                                    source={require('../img/notfound.png')} 
                                />
                            </View>
                            <View style={styles.cardPart}>
                                <Text style={[styles.cardTitle, styles.text]}>{song}</Text>
                                <Text style={[styles.cardText, styles.text]}>Короткий опис пісні</Text>
                                <Text style={[styles.cardDate, styles.text]}>00.00.0000</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
