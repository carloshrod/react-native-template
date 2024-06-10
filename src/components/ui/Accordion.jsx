import { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import AccordionCard from './AccordionCard';
import { ChevronDownIcon, ChevronUpIcon } from '../../utils/icons';

const Accordion = props => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const pressableIcon = isOpen ? ChevronUpIcon : ChevronDownIcon;

	return (
		<View style={styles.accordion}>
			<Pressable style={styles.pressable} onPress={handleOpen}>
				<View style={{ flexDirection: 'row' }}>
					<Image style={styles.icon} source={pressableIcon} />
					<Text style={styles.pressableLabel}>{props.label}</Text>
				</View>
				<View style={styles.logLength}>
					<Text style={styles.logLengthLabel}>{props?.logs?.length}</Text>
				</View>
			</Pressable>
			{isOpen ? <AccordionCard {...props} /> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	accordion: {
		width: '100%',
		gap: 8,
		marginBottom: 24,
	},
	pressable: {
		width: '100%',
		height: 55,
		flexDirection: 'row',
		justifyContent: 'space-between',
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
	logLength: {
		height: 20,
		minWidth: 26,
		paddingHorizontal: 2,
		backgroundColor: '#E4E8EB',
		borderRadius: 6,
	},
	logLengthLabel: {
		textAlign: 'center',
		fontFamily: 'DMSansBold',
		fontSize: 16,
	},
});

export default Accordion;
