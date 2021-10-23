import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import * as firebase from 'firebase';
import db from '../config.js';

export default class TransactionScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image
            source={require('../assets/planner.png')}
            style={{
              width: 40,
              height: 40,
              marginRight: 1,
              marginTop: 10,
              margin: 10,
            }}
          />
          <Text style={styles.text}>Daily Planner</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e5d5',
  },
  textContainer: {
    backgroundColor: '#FFBC94',
    flexDirection: 'row',
    width: 260,
    height: 60,
    borderRadius: 15,
    marginLeft: 50,
    marginTop: 20,
  },
  text: {
    color: 'white',
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
});
