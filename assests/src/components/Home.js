import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CurrentlyHiringCardView from './currentHiringCard';
import UpcomingInternshipsCardView from './upcomingInternshipsCard';

export default function Home() {
  return (
    <View>
      <Text style={{fontSize: 15}}>Let's help land your dream career</Text>
      <CurrentlyHiringCardView />
      <UpcomingInternshipsCardView />
    </View>
  );
}

const styles = StyleSheet.create({});
