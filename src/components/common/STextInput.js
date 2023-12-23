import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import SText from './SText';

const STextInput = ({
    label='',
    placeholder="Tap to Write",
    value='',
    onChangeText=()=>{},
    type='ascii-capable',
    containerStyle={},
}) => {
  return (
   <View style={styles.container}>
   {label && (
    <SText text={label} size={14}/>
  )}
  <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={type}
      style={[containerStyle,styles.textBox]}
      placeholderTextColor={"#7F7F7F"}
    />
   </View>
  )
}

export default STextInput

const styles = StyleSheet.create({
  container:{
    marginVertical:5,
  },  
    textBox:{
        paddingVertical:13,
        paddingHorizontal:20,
        backgroundColor:"#EEEEEE",
        fontSize:16,
        color:"#000000", 
        borderRadius:8,
        marginTop:5,
        borderWidth:0.5,
    },
})