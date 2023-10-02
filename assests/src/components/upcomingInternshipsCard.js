import {
  ScrollView,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import currentHiringData from '../../data/upcomingInternshipsData';
import colors from '../../colors/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function upcomingInternshipsCard() {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Upcoming Internships</Text>
      <FlatList
        style={styles.container}
        data={currentHiringData}
        renderItem={({item}) => (
          <>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title}> {item.company}</Text>

              <Text style={styles.title}>
                <EvilIcons name="location" style={styles.icon} />{' '}
                {item.location}
              </Text>
              <Text style={styles.title}>
                <MaterialCommunityIcons name="cash" style={styles.icon} />{' '}
                {item.stipend}
              </Text>
              <Text style={styles.title}>
                <MaterialCommunityIcons
                  name="calendar-month"
                  style={styles.icon}
                />{' '}
                {item.duration}
              </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Details ↗</Text>
            </TouchableOpacity>
            </View>
          </>
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
  container: {flex: 1},
  item: {
    backgroundColor: colors.orange,
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 40,
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#19A7CE",
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
