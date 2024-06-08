import { Image, StyleSheet, Text, View } from 'react-native';
import Main from './Main';
import { sosLogo, splash } from '../../utils/images';

const AuthLayout = ({ children }) => {
	return (
		<Main>
			<View style={styles.container}>
				<Image source={splash} />
				{children}
			</View>
			<View style={styles.developedBy}>
				<Text style={styles.developedByText}>Desarrollado por</Text>
				<Image source={sosLogo} />
			</View>
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
