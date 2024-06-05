import { StyleSheet, View } from 'react-native';
import { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';

const Main = ({ children }) => {
	const [fontsLoaded] = useFonts({
		Montserrat: require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
		DMSans: require('../../assets/fonts/DMSans-Regular.ttf'),
		DMSansMedium: require('../../assets/fonts/DMSans-Medium.ttf'),
		DMSansBold: require('../../assets/fonts/DMSans-Bold.ttf'),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	const onLayout = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) return null;

	return (
		<View style={styles.container} onLayout={onLayout}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		paddingHorizontal: 24,
		flex: 1,
		backgroundColor: '#25292E',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Main;
