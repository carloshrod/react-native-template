import { View, StyleSheet, Image } from 'react-native';
import Main from './Main';
import Constants from 'expo-constants';

const PrivateLayout = ({ children }) => {
	return (
		<Main>
			<View style={styles.navBar}>
				<Image source={require('../../assets/images/menu.png')} />
				<Image source={require('../../assets/images/navbar-logo.png')} />
				<Image source={require('../../assets/images/bell.png')} />
			</View>
			<View style={styles.container}>{children}</View>
		</Main>
	);
};

const styles = StyleSheet.create({
	navBar: {
		width: '100%',
		height: 56,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: Constants.statusBarHeight,
		paddingHorizontal: 24,
		backgroundColor: '#25292E',
	},
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 24,
		backgroundColor: '#25292E',
	},
});

export default PrivateLayout;
