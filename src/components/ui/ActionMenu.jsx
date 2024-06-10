import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';
import { DotsIcon } from '../../utils/icons';
import { ACTIONS_MENU } from '../../utils/arrays';

const ActionMenu = ({ isOpen, onToggle }) => {
	return (
		<View
			style={[
				styles.actionMenu,
				{ backgroundColor: isOpen ? '#272620b0' : 'transparent' },
			]}
		>
			<Pressable style={styles.dotsContainer} onPress={onToggle}>
				<Image style={styles.dots} source={DotsIcon} />
			</Pressable>
			<View style={[styles.menuItems, { display: isOpen ? 'flex' : 'none' }]}>
				{ACTIONS_MENU.map(({ icon, label }, index) => (
					<View key={`${label}-${index}`} style={styles.buttonContainer}>
						<Pressable
							style={styles.button}
							onPress={() => Alert.alert(`Acción de ${label}`)}
						>
							<Image style={styles.buttonIcon} source={icon} />
						</Pressable>
						<View style={styles.buttonLabel}>
							<Text>{label}</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	actionMenu: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	dotsContainer: {
		padding: 20,
		alignItems: 'flex-end',
	},
	dots: {
		height: 16,
		width: 16,
	},
	menuItems: {
		width: '100%',
		flexDirection: 'row',
	},
	buttonContainer: {
		margin: 'auto',
		alignItems: 'center',
		gap: 8,
	},
	button: {
		height: 40,
		width: 40,
		backgroundColor: '#FFCD06',
		borderRadius: 100,
	},
	buttonIcon: {
		height: 20,
		width: 20,
		margin: 'auto',
	},
	buttonLabel: {
		paddingHorizontal: 6,
		backgroundColor: '#FFFFFF',
		borderRadius: 4,
	},
});

export default ActionMenu;
