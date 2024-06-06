import { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const toggleOnIcon = '../../assets/images/toggle-on.png';
const toggleOffIcon = '../../assets/images/toggle-off.png';

const Checkbox = () => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckbox = () => {
		setIsChecked(!isChecked);
	};

	return (
		<TouchableOpacity
			activeOpacity={1}
			style={styles.checkbox}
			onPress={toggleCheckbox}
		>
			<Text style={styles.label}>{isChecked ? 'SÍ' : 'NO'}</Text>
			{isChecked ? (
				<Image source={require(toggleOnIcon)} />
			) : (
				<Image source={require(toggleOffIcon)} />
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	checkbox: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	label: {
		marginRight: 6,
		color: '#FFFFFF',
	},
});

export default Checkbox;
