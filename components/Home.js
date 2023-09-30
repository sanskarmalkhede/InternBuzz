import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardView from './cardView';
import MenuExample from './menu';

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <MenuExample />
      <CardView />
    </View>
  );
}

const styles = StyleSheet.create({});
