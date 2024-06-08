import { Text, StyleSheet, Pressable } from 'react-native';

const Button = ({ label, width = undefined, onPress = () => null }) => {
	return (
		<Pressable style={[styles.button, { width }]} onPress={onPress}>
			<Text style={styles.label}>{label}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		height: 48,
		marginTop: 8,
		paddingHorizontal: 32,
		backgroundColor: '#000000',
		borderRadius: 24,
	},
	label: {
		fontFamily: 'DMSansMedium',
		fontSize: 16,
		color: '#FFCD06',
		textAlign: 'center',
		lineHeight: 48,
	},
});

export default Button;
