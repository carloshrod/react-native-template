import { View, Image, TextInput, StyleSheet } from 'react-native';

const Input = ({ label, icon }) => {
	return (
		<View style={styles.inputContainer}>
			<Image style={styles.prepend} source={icon} />
			<TextInput
				style={styles.input}
				placeholder={label}
				placeholderTextColor='#25292E'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		position: 'relative',
		width: '100%',
	},
	prepend: {
		position: 'absolute',
		top: '50%',
		transform: [{ translateY: -8 }],
		left: 12,
		height: 16,
		width: 16,
	},
	input: {
		height: 48,
		width: '100%',
		fontFamily: 'Inter',
		fontSize: 14,
		paddingHorizontal: 40,
		borderWidth: 1,
		border: '#25292E',
		borderRadius: 24,
	},
});

export default Input;
