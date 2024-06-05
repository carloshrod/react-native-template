import { View } from 'react-native';
import { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const Main = ({ children }) => {
	const [fontsLoaded] = useFonts({
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

	return <View onLayout={onLayout}>{children}</View>;
};

export default Main;
