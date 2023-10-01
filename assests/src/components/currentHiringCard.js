import {
  ScrollView,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import currentHiringData from '../../data/currentHiringData';
import colors from '../../colors/colors';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function currentHiringCard() {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Currently hiring</Text>
      <FlatList
        horizontal={true}
        style={styles.container}
        data={currentHiringData}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}> {item.company}</Text>

            <Text style={styles.title}>
              <Icon name="location" style={styles.location} /> {item.location}
            </Text>
            <Text style={styles.title}>
              <Icon name="location" style={styles.location} /> {item.stipend}
            </Text>
            <Text style={styles.title}>
              <Icon name="location" style={styles.location} /> {item.duration}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  container: {},
  item: {
    backgroundColor: '#A5F1E9',
    borderRadius: 15,
    padding: 25,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    width: 200,
  },
  location: {
    fontSize: 20,
    color: colors.black,
  },
});
