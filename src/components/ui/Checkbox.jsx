import { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ToggleOffIcon, ToggleOnIcon } from '../../utils/icons';

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
				<Image source={ToggleOnIcon} />
			) : (
				<Image source={ToggleOffIcon} />
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
