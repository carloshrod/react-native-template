import { useState } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Pressable,
} from 'react-native';

const Navbar = ({ navigation, route }) => {
	const isHome = route?.toLowerCase() === 'home';
	const [checked, setChecked] = useState(false);
	const notificationsLength = 1;

	return (
		<View style={styles.navBar}>
			{isHome ? (
				<>
					<Image source={require('../../../assets/images/menu.png')} />
					<Image source={require('../../../assets/images/navbar-logo.png')} />
					<Pressable
						style={styles.notification}
						onPress={() => setChecked(true)}
					>
						<Image source={require('../../../assets/images/bell.png')} />
						{notificationsLength > 0 && !checked ? (
							<Text style={styles.notificationDot}>{notificationsLength}</Text>
						) : null}
					</Pressable>
				</>
			) : (
				<>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.back}
						onPress={() => navigation.goBack()}
					>
						<Image source={require('../../../assets/images/arrow-left.png')} />
					</TouchableOpacity>
					<Text style={styles.routeName}>{route}</Text>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	navBar: {
		width: '100%',
		height: 56,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 24,
		backgroundColor: '#25292E',
	},
	notification: {
		position: 'relative',
	},
	notificationDot: {
		position: 'absolute',
		right: -7,
		bottom: -4,
		height: 18,
		width: 18,
		textAlign: 'center',
		lineHeight: 18,
		backgroundColor: 'red',
		fontFamily: 'DMSansBold',
		fontSize: 12,
		color: '#FFFFFF',
		borderRadius: 50,
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
});

export default Navbar;
