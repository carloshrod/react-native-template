import { View, Text, StyleSheet } from 'react-native';

const AccordionCard = () => {
	return (
		<View style={styles.card}>
			<Text style={styles.cardTitle}>Visita de Luis Perez</Text>
			<Text style={styles.cardDate}>24/01/2024 18:00 hs</Text>
			<Text style={styles.cardText}>
				Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat
				pobelig sedade megalig.
			</Text>
		</View>
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
	cardTitle: {
		fontFamily: 'DMSansBold',
		fontSize: 16,
		color: '#FFCD06',
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
