import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SButton from '../../components/common/SButton';

const HomeScreen = ({navigation}) => {
  const handleNavigation = name => {
    navigation.navigate(name);
  };
  return (
    <View style={styles.container}>
      <SButton text="Parllax Carousel" onPress={() => handleNavigation('ParllaxCarousel')} />
      {/* <SButton
        text="Search Bar"
        onPress={() => handleNavigation('SearchBar')}
      /> */}
      <SButton
        text="Slider Animation"
        onPress={() => handleNavigation('SliderAnimation')}
      />
      <SButton
      text="Rainbow Circle Animation"
      onPress={() => handleNavigation('RainbowCircle')}
    />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
