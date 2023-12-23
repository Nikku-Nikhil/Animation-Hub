import ParllaxCarousel from "../screens/ParllaxCarousel/index";
import SearchBar from "../screens/SearchBar/index";
import SliderAnimation from "../screens/SliderAnimation/index";
import HomeScreen from "../screens/HomeScreen/index";
import RainbowCircle from "../screens/RainbowCircle/index";
import ReanimatedExample from "../screens/ReanimatedExample/ReanimatedExample";

const AllScreens = {
  HomeScreen: {
    screen: HomeScreen,
    name: "All Animation Projects",
  },
  ParllaxCarouselScreen: {
    screen: ParllaxCarousel,
    name: "ParllaxCarousel",
  },
  SearhBar: {
    screen: SearchBar,
    name: "SearchBar",
  },
  SliderAnimation: {
    screen: SliderAnimation,
    name: "SliderAnimation",
  },
  RainbowCircle: {
    screen: RainbowCircle,
    name: "RainbowCircle",
  },
  ReanimatedExample: {
    screen: ReanimatedExample,
    name: "ReanimatedExample",
  },
};

export default AllScreens;
