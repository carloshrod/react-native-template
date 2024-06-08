import { View } from 'react-native';
import { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
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
		<View
			style={{
				flex: 1,
			}}
			onLayout={onLayout}
		>
			{children}
		</View>
	);
};

export default Main;
