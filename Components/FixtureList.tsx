import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Fixture from './Fixture';
import {Fixture as FixtureType} from '../types/types';
import {request} from '../util/Requests';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const FixtureList = () => {
  const [fixtures, setFixtures] = useState<FixtureType[]>([]);

  useEffect(() => {
    request(
      'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/1', // 4265 = 2022
    ).then(res => {
      setFixtures(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList<FixtureType>
        data={fixtures}
        renderItem={fixture => <Fixture fixture={fixture.item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.fixture_id.toString()}
      />
    </View>
  );
};

export default FixtureList;
