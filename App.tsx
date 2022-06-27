import React from 'react';
import {View, StyleSheet} from 'react-native';
import FixtureList from './Components/FixtureList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <FixtureList />
    </View>
  );
};

export default App;
