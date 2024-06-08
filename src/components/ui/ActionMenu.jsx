import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { dotsIcon } from '../../utils/icons';
import { ACTIONS_MENU } from '../../utils/arrays';

const ActionMenu = ({ isOpen, onToggle }) => {
	return (
		<View style={styles.actionMenu}>
			<Pressable style={styles.dotsContainer} onPress={onToggle}>
				<Image style={styles.dots} source={dotsIcon} />
			</Pressable>
			<View style={[styles.menuItems, { display: isOpen ? 'flex' : 'none' }]}>
				{ACTIONS_MENU.map(({ icon, label }, index) => (
					<View key={`${label}-${index}`} style={styles.buttonContainer}>
						<Pressable style={styles.button}>
							<Image style={styles.buttonIcon} source={icon} />
						</Pressable>
						<Text>{label}</Text>
					</View>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	dotsContainer: {
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	dots: {
		height: 16,
		width: 16,
	},
	actionMenu: {
		position: 'relative',
	},
	menuItems: {
		position: 'absolute',
		top: 24,
		right: 14,
		width: 200,
		height: 90,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 6,
		gap: 24,
		backgroundColor: '#FFFFFF',
		zIndex: 5,
		borderTopStartRadius: 10,
		borderBottomStartRadius: 10,
		borderBottomEndRadius: 10,
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		height: 40,
		width: 40,
		backgroundColor: '#E4E8EB',
		borderRadius: 100,
	},
	buttonIcon: {
		height: 20,
		width: 20,
		margin: 'auto',
		tintColor: '#000000',
	},
});

export default ActionMenu;
