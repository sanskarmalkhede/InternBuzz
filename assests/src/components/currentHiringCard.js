import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import currentHiringData from '../../data/currentHiringData';
import colors from '../../colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function currentHiringCard() {
  return (
    <>
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
              <MaterialIcons name="location-on" style={styles.icon} />{' '}
              {item.location}
            </Text>
            <Text style={styles.title}>
              <MaterialComunnityIcons name="cash" style={styles.icon} />{' '}
              {item.stipend}
            </Text>
            <Text style={styles.title}>
              <MaterialComunnityIcons
                name="calendar-month-outline"
                style={styles.icon}
              />{' '}
              {item.duration}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Details ↗</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </>
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
    backgroundColor: colors.activecard,
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    width: 200,
  },
  icon: {
    fontSize: 20,
    color: colors.black,
  },
  button: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: colors.button,
    padding: 10,
    borderRadius: 10,
    width: 120,
    height: 40,
    marginTop: 10,
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
  },
});
