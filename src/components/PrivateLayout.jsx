import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Main from './Main';
import Constants from 'expo-constants';

const PrivateLayout = ({ navigation, route = undefined, children }) => {
	const isHome = route?.toLowerCase() === 'home';

	return (
		<Main>
			<View style={styles.navBar}>
				{isHome ? (
					<>
						<Image source={require('../../assets/images/menu.png')} />
						<Image source={require('../../assets/images/navbar-logo.png')} />
						<Image source={require('../../assets/images/bell.png')} />
					</>
				) : (
					<>
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.back}
							onPress={() => navigation.goBack()}
						>
							<Image source={require('../../assets/images/arrow-left.png')} />
						</TouchableOpacity>
						<Text style={styles.routeName}>{route}</Text>
					</>
				)}
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
	back: {
		position: 'absolute',
		top: 16,
		left: 24,
	},
	routeName: {
		margin: 'auto',
		fontFamily: 'DMSansBold',
		fontSize: 18,
		color: '#FFFFFF',
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
