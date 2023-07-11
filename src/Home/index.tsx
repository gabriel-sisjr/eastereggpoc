import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import useEasterEgg from '../hooks/useEasterEgg';

const Home: React.FC = () => {
  const {isEasterEggActive, count, toggle} = useEasterEgg();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>
        Status: {isEasterEggActive ? 'Active' : 'Inactive'}
      </Text>
      <TouchableOpacity onPress={toggle}>
        <Text>Pressione</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
