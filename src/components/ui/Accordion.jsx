import { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import AccordionCard from './AccordionCard';
import { chevronDownIcon, chevronUpIcon } from '../../utils/icons';

const Accordion = props => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const pressableIcon = isOpen ? chevronUpIcon : chevronDownIcon;

	return (
		<View style={styles.accordion}>
			<Pressable style={styles.pressable} onPress={handleOpen}>
				<Image style={styles.icon} source={pressableIcon} />
				<Text style={styles.pressableLabel}>{props.label}</Text>
			</Pressable>
			{isOpen ? <AccordionCard {...props} /> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	accordion: {
		width: '100%',
		maxWidth: 400,
		gap: 8,
		marginBottom: 8,
	},
	pressable: {
		width: '100%',
		height: 55,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 8,
		backgroundColor: '#000000',
		borderRadius: 8,
	},
	icon: {
		height: 24,
		width: 24,
	},
	pressableLabel: {
		marginLeft: 24,
		fontFamily: 'DMSansMedium',
		fontSize: 18,
		color: '#FFCD06',
	},
});

export default Accordion;
