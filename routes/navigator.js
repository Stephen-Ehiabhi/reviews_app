import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';


const screens = {
   Home: {
      Screen: Home
   },
   ReviewDetails: {
      Screen: ReviewDetails
   }     
};


const stack = createStackNavigator(screens);
const navigation = NavigationContainer(stack)


export default navigation;