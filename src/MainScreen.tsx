import React from 'react';

import {StyleSheet, View} from 'react-native';

import {Title} from 'react-native-paper';

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Title>ここはメイン画面です</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
