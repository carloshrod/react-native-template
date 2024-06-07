import { StyleSheet, View } from 'react-native';
import { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';
import {
	DMSans,
	DMSansBold,
	DMSansMedium,
	Inter,
	InterSBold,
	InterXBold,
} from '../../utils/fonts';

const Main = ({ children }) => {
	const [fontsLoaded] = useFonts({
		DMSans,
		DMSansMedium,
		DMSansBold,
		Inter,
		InterSBold,
		InterXBold,
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
		marginTop: Constants.statusBarHeight,
	},
});

export default Main;
