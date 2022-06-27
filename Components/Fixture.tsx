/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Image, Dimensions, Text} from 'react-native';
import {formatDay} from '../util/FormatDay';
import {Fixture as FixtureType, Team} from '../types/types';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 25,
    width: Dimensions.get('window').width - 15,
    height: 75,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,
  },
  center: {
    textAlign: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  bigBoldText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
});

interface Props {
  fixture: FixtureType;
}

interface TeamProps {
  homeTeam: Team;
  awayTeam: Team;
  homeGoals: number;
  awayGoals: number;
}

const Result = (props: {home: number; away: number}) => {
  const {home, away} = props;
  return (
    <Text style={[styles.bigBoldText]}>
      {home} - {away}
    </Text>
  );
};

const Teams = ({homeTeam, awayTeam, homeGoals, awayGoals}: TeamProps) => {
  return (
    <View style={[styles.flex]}>
      <Image style={[styles.logo]} source={{uri: homeTeam.logo}} />
      <Result home={homeGoals} away={awayGoals} />
      <Image style={[styles.logo]} source={{uri: awayTeam.logo}} />
    </View>
  );
};

const Fixture = ({fixture}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.center]}> {formatDay(fixture.event_timestamp)}</Text>
      <View>
        <Teams
          homeTeam={fixture.homeTeam}
          awayTeam={fixture.awayTeam}
          homeGoals={fixture.goalsHomeTeam}
          awayGoals={fixture.goalsAwayTeam}
        />
      </View>
    </View>
  );
};

export default Fixture;
