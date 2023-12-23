// Horizontally Parallax

// import {StyleSheet, Dimensions, View, FlatList, Image, Animated} from 'react-native';
// import React,{useRef} from 'react';
// import SText from '../../components/common/SText';
// import SButton from '../../components/common/SButton';
// import {parallaxImages} from '../../Utils/Images'


// const {width , height} = Dimensions.get('window');
// const ITEM_WIDTH = width*0.76;
// const ITEM_HEIGHT = ITEM_WIDTH * 1.47;


// const data = parallaxImages.map((item, index)=>({
//   key : String(index),
//   photo: item.url,
//   avatar: `https://randomuser.me/portraits/women/${Math.floor(Math.random()*40)}.jpg`
// }))


// const ParllaxCaousel = () => {

//   const scrollX = useRef(new Animated.Value(0)).current;
 

//   const renderImages=({item, index})=>{
//     const inputRange = [
//       (index-1) * width,
//       index*width,
//       (index+1) * width
//   ]
//   const translateX = scrollX.interpolate({
//     inputRange,
//     outputRange:[-width*0.7 , 0 , width*0.7],
//   })
//     return(
//       <View style={styles.renderImagesSection}>
//       <View style={{
//         padding:12,
//         backgroundColor:"white",
//         borderRadius:12,
//         shadowColor:"#000",
//         shadowOpacity:0.5,
//         shadowRadius:20,
//         shadowOffset:{width:0, height:2},

//       }}>
//       <View style={{
//         height:ITEM_HEIGHT,
//         width:ITEM_WIDTH,
//         overflow:"hidden",
//         alignItems:"center",
//         borderRadius:12,
//       }}>
//       <Animated.Image source={{uri: item.photo}} style={[styles.imageStyle,{
//         transform:[{translateX}]
//       }]} />
//       </View>
//       </View>
        
//       </View>
//       )
//     }

//   return (
//     <View style={styles.container}>
//       <Animated.FlatList 
//         data={data}
//         keyExtractor={(item)=>item.key}
//         pagingEnabled
//         onScroll={Animated.event(
//           [{nativeEvent:{contentOffset:{x:scrollX}}}],
//           {useNativeDriver:true}
//         )}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         renderItem={renderImages}
//       />
//     </View>
//   );
// };

// export default ParllaxCaousel;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   renderImagesSection:{
//     width:width,
//     alignItems:"center",
//     justifyContent:"center"

//   },
//   imageStyle:{
//     height:ITEM_HEIGHT,
//     width:ITEM_WIDTH*1.4,
//     resizeMode:"cover",
   
//   }

// });


// Vertically Parallax

import { StyleSheet, Dimensions, View, FlatList, Image, Animated } from 'react-native';
import React, { useRef } from 'react';
import { parallaxImages } from '../../Utils/Images';

const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.86; // Adjust the width as needed
const ITEM_HEIGHT = height * 0.6; // Adjust the height as needed

const data = parallaxImages.map((item, index) => ({
  key: String(index),
  photo: item.url,
  avatar: `https://randomuser.me/portraits/women/${Math.floor(Math.random() * 40)}.jpg`
}));

const ParallaxCarousel = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderImages = ({ item, index }) => {
    const inputRange = [
      (index - 1) * height,
      index * height,
      (index + 1) * height
    ];
    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [-ITEM_HEIGHT * 0.5, 0, ITEM_HEIGHT * 0.5], // Adjust the output range for subtle effect
    });
    return (
      <View style={styles.renderImagesSection}>
        <View style={styles.imageContainer}>
        <View style={{
                  height:ITEM_HEIGHT,
                  width:ITEM_WIDTH,
                  overflow:"hidden",
                  justifyContent:"center",
                  alignItems:"center",
                  borderRadius:12,
                }}>
          <Animated.Image source={{ uri: item.photo }} style={[styles.imageStyle, {
            transform: [{ translateY }]
          }]} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        pagingEnabled
        snapToInterval={height*0.9} // Snap to each item based on screen height
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        showsVerticalScrollIndicator={false}
        renderItem={renderImages}
      />
    </View>
  );
};

export default ParallaxCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center FlatList content vertically
  },
  renderImagesSection: {
    width: width,
    height: height*0.9, // Set the height of the section to screen height
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 2 },
  },
  imageStyle: {
    height: ITEM_HEIGHT*2 , // Adjust if necessary for the parallax effect
    width: ITEM_WIDTH*1,
    resizeMode: 'cover',
  },
});
