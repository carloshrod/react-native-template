import { StyleSheet, View } from 'react-native';
import { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const Main = ({ children }) => {
	const [fontsLoaded] = useFonts({
		DMSans: require('../../assets/fonts/DMSans-Regular.ttf'),
		DMSansMedium: require('../../assets/fonts/DMSans-Medium.ttf'),
		DMSansBold: require('../../assets/fonts/DMSans-Bold.ttf'),
		Inter: require('../../assets/fonts/Inter-Regular.ttf'),
		InterSBold: require('../../assets/fonts/Inter-SemiBold.ttf'),
		InterXBold: require('../../assets/fonts/Inter-ExtraBold.ttf'),
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
		<View style={styles.main} onLayout={onLayout}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
});

export default Main;
