import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './assests/src/components/Home';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Home />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
