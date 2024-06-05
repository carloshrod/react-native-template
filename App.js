import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import PrivateScreens from './src/components/TabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Login'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Signup' component={Signup} />
				<Stack.Screen name='PrivateScreens' component={PrivateScreens} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
