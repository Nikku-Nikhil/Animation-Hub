import ParllaxCarousel from '../screens/ParllaxCarousel/index';
import SearchBar from '../screens/SearchBar/index';
import SliderAnimation from '../screens/SliderAnimation/index';
import HomeScreen from '../screens/HomeScreen/index';
import RainbowCircle from '../screens/RainbowCircle/index'

const AllScreens = {
  HomeScreen: {
    screen: HomeScreen,
    name: 'All Animation Projects',
  },
  ParllaxCarouselScreen: {
    screen: ParllaxCarousel,
    name: 'ParllaxCarousel',
  },
  SearhBar: {
    screen: SearchBar,
    name: 'SearchBar',
  },
  SliderAnimation: {
    screen: SliderAnimation,
    name: 'SliderAnimation',
  },
  RainbowCircle:{
    screen: RainbowCircle,
    name: 'RainbowCircle',
  }
};

export default AllScreens;
