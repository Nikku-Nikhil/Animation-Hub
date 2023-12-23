import { View, Button } from "react-native";
import React from "react";
import styles from "./styles";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const ReanimatedExample = () => {
  const randomWidth = useSharedValue<number>(100);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, {
        duration: 500,
      }),
    };
  });

  const handleToggleButton = () => {
    randomWidth.value = Math.random() * 360;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <Button title="Toggle" onPress={handleToggleButton} />
    </View>
  );
};

export default ReanimatedExample;
