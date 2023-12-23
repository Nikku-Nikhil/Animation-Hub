import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import {dummyImages} from '../../Utils/Images'

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SPACING = 10;
const ITEM_SIZE = WIDTH * 0.25;
const ITEM_SPACER = (WIDTH - ITEM_SIZE) / 2;



const SliderAnimation = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const topRef = useRef();
  const thumbRef = useRef();
  const [activeIndex,setActiveIndex]= useState(0);

  const scrollToActiveIndex = (index) => {
    // console.log("activeindex",activeIndex,"Index",index)
    setActiveIndex(index);

    topRef?.current?.scrollToIndex({
      index:index+1,
      animated: true,
    });
    thumbRef?.current?.scrollToIndex({
      index:index,
      animated: true,
    });

  };

  const renderImages = ({ item, index }) => {
    if (!item.url) {
      return <View style={{ width: ITEM_SPACER,}} />;
      
    }

    const inputRange = [
      (index - 2) * (ITEM_SIZE + SPACING * 2),
      (index - 1) * (ITEM_SIZE + SPACING * 2),
      index * (ITEM_SIZE + SPACING * 2),
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -40, 0],
    });

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [1, 1.2, 1],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        
        style={{
          justifyContent: "flex-end",
          marginTop:100,
          marginBottom: 100,
          marginHorizontal: SPACING,
          transform: [{ translateY }, { scale }],
          shadowOffset: { width: 0, height: 2 },
          shadowColor: "#000",
          shadowRadius: 10,
          shadowOpacity: 0.5,
          elevation:2,
        
        }}
      >
        <TouchableOpacity
          onPress={()=>scrollToActiveIndex(index-1)}
        >
        <Image
          source={{ uri: item.url }}
          style={{
            height: ITEM_SIZE,
            width: ITEM_SIZE,
            borderRadius: ITEM_SIZE / 2, 
            borderWidth:2,
            borderColor: activeIndex===(index-1 )? '#fff' : "transparent"
          }}
        />
        </TouchableOpacity>
        
      </Animated.View>
    );
  };

  const renderFullImage=({item,index})=>{
    if(!item.url){
      return null
      
    }
    return(
      <View style={{flex:1}} >
      <Image source={{uri:item.url}} style={{
        height:HEIGHT,
        width:WIDTH,
      }} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={topRef}
        data={dummyImages} 
        horizontal
        style={{zIndex:1}}
        pagingEnabled
        keyExtractor={(item) => item.id ? item.id.toString() : `item-${item.key}`}
        showsHorizontalScrollIndicator={false}
        
        onMomentumScrollEnd={(ev)=>{
          scrollToActiveIndex(Math.floor((ev.nativeEvent.contentOffset.x / WIDTH)));
        }}
        renderItem={renderFullImage}
      />
      <Animated.FlatList
        ref={thumbRef}
        data={dummyImages}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{position:"absolute", bottom:0,  zIndex:1,}}
        renderItem={renderImages}
        keyExtractor={(item) => item.id ? item.id.toString() : `item-${item.key}`}
        snapToInterval={ITEM_SIZE + SPACING * 2}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />

    </View>
  );
};

export default SliderAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
