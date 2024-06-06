import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const chevronRightIcon = '../../../assets/images/chevron-right.png';

const NavLink = ({ label, icon, navigateTo, navigation }) => {
	return (
		<Pressable
			style={styles.navLink}
			onPress={() => navigation.navigate(navigateTo)}
		>
			<View style={styles.navLinkLabel}>
				<Image source={icon} />
				<Text style={styles.labelText}>{label}</Text>
			</View>
			<Image source={require(chevronRightIcon)} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	navLink: {
		width: '100%',
		height: 80,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 24,
		marginBottom: 16,
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
	},
	navLinkLabel: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	labelText: {
		fontFamily: 'InterSBold',
		fontSize: 14,
		color: '#25292E',
	},
});

export default NavLink;
