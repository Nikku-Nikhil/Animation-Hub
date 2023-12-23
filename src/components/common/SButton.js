import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SText from './SText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SButton = ({
  text,
  textSize = 14,
  backgroundColor = '#eee',
  color = '#000',
  width = '100%',
  containerStyle,
  iconShown = true,
  borderColor = '#000',
  icon = <MaterialIcons name="arrow-forward-ios" size={20} />,
  onPress = () => {},
}) => {
  console.log("Text",text);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor,
          width,
          borderColor,
        },
        styles.btn,
        containerStyle,
      ]}>
      <SText text={text} color={color} size={textSize} />
      {iconShown && icon}
    </TouchableOpacity>
  );
};

export default SButton;

const styles = StyleSheet.create({
  btn: {
    padding: 18,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 5,
  },
});
