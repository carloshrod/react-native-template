import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import ProtectedScreens from './src/components/ProtectedScreens';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<View style={styles.main}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Login'
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name='Login' component={Login} />
					<Stack.Screen name='Signup' component={Signup} />
					<Stack.Screen
						name='Protected'
						component={ProtectedScreens}
						option={{ tabBarVisible: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
	},
});
