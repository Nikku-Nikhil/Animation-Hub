import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screens from "./routes";
import CustomBackButton from "../components/CustomBackButton";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const options = ({ navigation }) => ({
    headerLeft: () => <CustomBackButton navigation={navigation} />,
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.HomeScreen.name}
        component={Screens.HomeScreen.screen}
      />
      <Stack.Screen
        name={Screens.ParllaxCarouselScreen.name}
        component={Screens.ParllaxCarouselScreen.screen}
        options={options}
      />
      <Stack.Screen
        name={Screens.SearhBar.name}
        component={Screens.SearhBar.screen}
        options={options}
      />
      <Stack.Screen
        name={Screens.SliderAnimation.name}
        component={Screens.SliderAnimation.screen}
        options={options}
      />
      <Stack.Screen
        name={Screens.RainbowCircle.name}
        component={Screens.RainbowCircle.screen}
        options={options}
      />
      <Stack.Screen
        name={Screens.ReanimatedExample.name}
        component={Screens.ReanimatedExample.screen}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
