import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Main from './Main';
import { sosLogo, splash } from '../../utils/images';
import { useEffect, useState } from 'react';

const AuthLayout = ({ children }) => {
	const [keyboardShown, setKeyboardShown] = useState(false);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			() => setKeyboardShown(true),
		);
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => setKeyboardShown(false),
		);

		return () => {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		};
	}, []);

	return (
		<Main>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<Image source={splash} />
				{children}
			</KeyboardAvoidingView>
			{!keyboardShown && (
				<View style={styles.developedBy}>
					<Text style={styles.developedByText}>Desarrollado por</Text>
					<Image source={sosLogo} />
				</View>
			)}
		</Main>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 40,
		paddingHorizontal: 24,
		backgroundColor: '#25292E',
	},
	developedBy: {
		position: 'absolute',
		bottom: 16,
		right: 24,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 6,
	},
	developedByText: {
		fontSize: 12,
		color: '#FFFFFF',
	},
});

export default AuthLayout;
