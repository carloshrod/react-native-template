import { Text, StyleSheet, Pressable } from 'react-native';

const Button = ({ label, navigateTo = null }) => {
	return (
		<Pressable style={styles.button} onPress={navigateTo}>
			<Text style={styles.label}>{label}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		height: 48,
		width: '100%',
		marginTop: 8,
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
