import { Animated, PanResponder, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import STextInput from "../../components/common/STextInput";
import User from "./User";
import SButton from "../../components/common/SButton";
import SText from "../../components/common/SText";

// Class component
// export class SearchBar extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       counter: 0,
//       movieName: [],
//     };
//   }

//   componentDidMount() {
//     User.all().then((data) => {
//       this.setState({ movieName: data.movies });
//     });
//   }

//   getData(x) {
//     this.setState({ counter: this.state.counter + x });
//   }

//   getDataWithoutState(x) {
//     return x + 10;
//   }

//   render() {
//     return (
//       <View style={{paddingHorizontal:10}}>
//         <STextInput placeholder="Enter you first name" label={"First Name"} />
//         <STextInput placeholder="Enter you last name" label={"Last Name"} />
//         {this.state.movieName.map((item) => {
//           return <SButton text={item.title} />;
//         })}
//       </View>
//     );
//   }
// }

// function component

const SearchBar = () => {
  
  const leftValue = useState(new Animated.Value(0))[0]
  const pan = useState(new Animated.ValueXY())[0]

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder:() => true,
      onPanResponderGrant: () => {
        console.log("PAN RESPONDER WAS GRANTED ACCESS !",)
        pan.setOffset({
          x:pan.x._value,
          y: pan.y._value
        })
      },
      onPanResponderMove: Animated.event([null, {
        dx: pan.x, dy:pan.y }]),
      onPanResponderRelease: () =>{
        pan.flattenOffset()
      }
    })
  )[0]


  function moveBall(){
    // this kind of work but this is so bad you should never do this cause you do all the calculation under this funciton everytime clicking on button
    // setInterval(()=>{
    //   setLeftValue(leftValue=> leftValue+50)
    // })

    Animated.timing(leftValue,{
        toValue:100,
        duration:1000,
        useNativeDriver:true,
    }).start()
  }

/*
   How animation played on the screen?
   RN -> UI(main) thread, JS Thread (javascript runs) if we block main thread then your app become freeze and your app runs on js so if you block js thread then also you app get freezed.
   1. Computation = JS Thread; Animation by native OS
    1.a Compute
    1.b Serialize
    1.c Transfer it over the bridge to host OS
    1.d Deserialize
    1.e Run the frame

   2. Everthing by Native OS.
    2.a before your animation start-> react serailize the whole animation thing
    2.b Native OS would deserialize it
    2.c WIN !

  pros: 
    1. No more over the bridge transfers
    2. JS Thread is now free for other stuff
    3. Smoother animations

  So for switch to main to JS Thread switch useNativeDriver=true to use main Thread and false for JS Thread
*/

/* 
  need a value 0 1 2 3 4 5 6
  (0,0) -> (100,100)
  (0,0) -> (1,1) -> (2,2) -> (3,3) ... and so on
  1 second
  60 frames per second

  this values should be transform into other value
*/

  return (
    <View >
       
        <Animated.View style={[
         { backgroundColor:'red',
          height:100,
          width:100,
          borderRadius:50,
          // now if we use marginLeft which is not a part of native module give us error so here how we do that
          // opacity:leftValue,
          // transform:[{translateX:leftValue}]
        },
        // pan.getLayout()
      ]}
      // {...panResponder.panHandlers}
      />
      
        <TouchableOpacity onPress={moveBall} >
        <SText text='Click Me' />
        </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
