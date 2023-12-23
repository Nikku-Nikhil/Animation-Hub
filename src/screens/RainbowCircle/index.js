import React, { useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');

const ITEM_WIDTH = 60;
const MIN_HEIGHT = 60;
const MAX_HEIGHT = 120;

const RainbowCircleAnimation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ITEM_HEIGHT = useRef(new Animated.Value(MIN_HEIGHT)).current;

  const handlePress = () => {
    Animated.timing(ITEM_HEIGHT, {
      toValue: isExpanded ? MIN_HEIGHT : MAX_HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.View
          style={{
            height: ITEM_HEIGHT,
            backgroundColor: 'blue',
            borderRadius: ITEM_HEIGHT.interpolate({
              inputRange: [MIN_HEIGHT, MAX_HEIGHT],
              outputRange: [MIN_HEIGHT / 2, MAX_HEIGHT / 2],
              extrapolate: 'clamp',
            }),
            transform:[{translateX:10},{translateY:20}],
            width: ITEM_WIDTH,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RainbowCircleAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
