import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomBackButton = ({navigation}) => {
  return (
    <TouchableOpacity
    onPress={() => navigation.goBack()}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <MaterialIcons name="arrow-back-ios" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default CustomBackButton;
