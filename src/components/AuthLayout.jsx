import { Image, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Main from './Main';

const AuthLayout = ({ children }) => {
	return (
		<Main>
			<View style={styles.container}>
				<Image source={require('../../assets/images/splash.png')} />
				{children}
			</View>
		</Main>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 40,
		paddingHorizontal: 24,
		backgroundColor: '#25292E',
	},
});

export default AuthLayout;
