import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardView from './currentHiringCard';

export default function Home() {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'white'}}>This is "Home.tsx"</Text>
      <CardView />
    </View>
  );
}

const styles = StyleSheet.create({});
