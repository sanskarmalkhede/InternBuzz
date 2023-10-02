import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import CurrentlyHiringCardView from './currentHiringCard';
import UpcomingInternshipsCardView from './upcomingInternshipsCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors/colors';

export default function Home() {
  return (
    <>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.menuWrapper}>
          <Pressable>
            <MaterialCommunityIcons name="menu" size={35} color="#fff" />
          </Pressable>
          <Text style={styles.menuTitle}>Internships</Text>
          <Pressable>
            <MaterialCommunityIcons
              name="bookmark-outline"
              size={30}
              color="#fff"
            />
          </Pressable>
        </View>
      </SafeAreaView>
      {/* Header */}

      <Text style={{fontSize: 25, fontWeight: 'bold', color: colors.white, marginVertical: 10, marginHorizontal: 25,}}>
        Welcome back!
      </Text>
      <Text style={{fontSize: 15, color: colors.lightGray, marginBottom: 20, marginHorizontal: 35,}}>Let's help land your dream career</Text>
      <CurrentlyHiringCardView />
      <UpcomingInternshipsCardView />
    </>
  );
}

const styles = StyleSheet.create({
  menuWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    flexDirection: 'row',
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    marginHorizontal: 20,
  },
  menuItem: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
  },
});
