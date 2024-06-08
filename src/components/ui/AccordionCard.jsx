import { View, Text, StyleSheet } from 'react-native';
import ActionMenu from './ActionMenu';
import { useState } from 'react';

const AccordionCard = ({ logs }) => {
	const [openMenuIndex, setOpenMenuIndex] = useState(null);

	const toggleMenu = index => {
		setOpenMenuIndex(openMenuIndex === index ? null : index);
	};
	return (
		<>
			{logs.map(({ title, date, description }, index) => (
				<View key={`${title}-${index}`} style={styles.card}>
					<View style={styles.cardHeader}>
						<View>
							<Text style={styles.cardTitle}>{title}</Text>
							<Text style={styles.cardDate}>{date}</Text>
						</View>
						<ActionMenu
							isOpen={openMenuIndex === index}
							onToggle={() => toggleMenu(index)}
						/>
					</View>
					<Text style={styles.cardText}>{description}</Text>
				</View>
			))}
		</>
	);
};

const styles = StyleSheet.create({
	card: {
		width: '100%',
		maxWidth: 400,
		padding: 16,
		backgroundColor: '#000000',
		borderRadius: 8,
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardTitle: {
		fontFamily: 'DMSansBold',
		fontSize: 16,
		color: '#FFFFFF',
	},
	cardDate: {
		fontFamily: 'DMSans',
		fontSize: 16,
		color: '#FFCD06',
	},
	cardText: {
		marginTop: 8,
		fontFamily: 'DMSans',
		fontSize: 14,
		color: '#FFCD06',
	},
});

export default AccordionCard;
