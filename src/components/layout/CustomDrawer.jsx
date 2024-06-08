import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navbarLogo } from '../../utils/images';
import { avatarIcon, logoutIcon } from '../../utils/icons';
import { DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = props => {
	const handleLogout = () => props.navigation.navigate('Login');

	return (
		<SafeAreaView>
			<View>
				<Pressable onPress={() => props.navigation.navigate('Drawer')}>
					<Image style={styles.logo} source={navbarLogo} />
				</Pressable>
				<View style={styles.userInfo}>
					<Image source={avatarIcon} />
					<Text style={styles.userName}>Leonardo Herrera</Text>
				</View>
			</View>
			<DrawerItemList {...props} />
			<Pressable style={styles.logout} onPress={handleLogout}>
				<Image source={logoutIcon} />
				<Text style={styles.logoutLabel}>Cerrar sesión</Text>
			</Pressable>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	logo: {
		marginLeft: 24,
		marginBottom: 40,
	},
	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
		paddingHorizontal: 24,
		marginBottom: 24,
	},
	userName: {
		width: '70%',
		fontFamily: 'DMSansBold',
		fontSize: 14,
		color: '#FFFFFF',
	},
	logout: {
		flexDirection: 'row',
		gap: 32,
		marginLeft: 24,
		paddingVertical: 16,
	},
	logoutLabel: {
		fontFamily: 'DMSansBold',
		color: '#FFFFFF',
	},
});

export default CustomDrawer;
