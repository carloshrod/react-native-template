import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import GoBack from '../ui/GoBack';
import { bellIcon, menuIcon } from '../../utils/icons';
import { navbarLogo } from '../../utils/images';
import {
	useNavigation,
	DrawerActions,
	useRoute,
} from '@react-navigation/native';

const Navbar = () => {
	const { name } = useRoute();
	const navigation = useNavigation();
	const [checked, setChecked] = useState(false);

	const HIDDEN_NAVBAR = ['Eventos', 'QR'];
	const isDrawer = name?.toLowerCase() === 'drawer';
	const isHiddenNavbar = HIDDEN_NAVBAR.includes(name);

	const notificationsLength = 1;

	const handleOpen = () => navigation.dispatch(DrawerActions.toggleDrawer());

	return isDrawer || !isHiddenNavbar ? (
		<View style={styles.navBar}>
			{isDrawer ? (
				<>
					<Pressable onPress={handleOpen}>
						<Image source={menuIcon} />
					</Pressable>
					<Image source={navbarLogo} />
					<Pressable
						style={styles.notification}
						onPress={() => {
							Alert.alert('Revisando notificaciones!');
							setChecked(true);
						}}
					>
						<Image source={bellIcon} />
						{notificationsLength > 0 && !checked ? (
							<Text style={styles.notificationDot}>{notificationsLength}</Text>
						) : null}
					</Pressable>
				</>
			) : (
				<>
					<GoBack top={16} left={24} />
					<Text style={styles.routeName}>{name}</Text>
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
