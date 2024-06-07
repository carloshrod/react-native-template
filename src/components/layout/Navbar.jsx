import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import GoBack from '../ui/GoBack';

const Navbar = ({ navigation, route }) => {
	const isHome = route?.toLowerCase() === 'home';
	const [checked, setChecked] = useState(false);
	const notificationsLength = 1;

	return isHome || navigation ? (
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
					<GoBack top={16} left={24} />
					<Text style={styles.routeName}>{route}</Text>
				</>
			)}
		</View>
	) : null;
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
	routeName: {
		margin: 'auto',
		fontFamily: 'DMSansBold',
		fontSize: 18,
		color: '#FFFFFF',
	},
});

export default Navbar;
