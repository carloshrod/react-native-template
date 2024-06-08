import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import PrivateLayout from '../components/layout/PrivateLayout';
import { CalendarLgIcon } from '../utils/icons';
import Button from '../components/ui/Button';

const Events = () => {
	const eventName = 'Sin eventos programados';
	const guestsName = 'Agregue un invitado y se mostrará aquí';

	return (
		<PrivateLayout>
			<Text style={styles.screenName}>Eventos</Text>
			<View style={styles.eventContainer}>
				<Image source={CalendarLgIcon} />
				<Text style={styles.eventName}>{eventName}</Text>
				<Text style={styles.guestsName}>{guestsName}</Text>
				<Button
					label='Agregar Invitados'
					onPress={() => Alert.alert('Agregando invitados!')}
				/>
			</View>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	screenName: {
		marginTop: 16,
		fontFamily: 'DMSansBold',
		fontSize: 18,
	},
	eventContainer: {
		width: '80%',
		minWidth: 250,
		alignItems: 'center',
		margin: 'auto',
	},
	eventName: {
		marginTop: 16,
		textAlign: 'center',
		fontFamily: 'DMSansBold',
		fontSize: 24,
	},
	guestsName: {
		marginTop: 24,
		marginBottom: 48,
		textAlign: 'center',
		fontFamily: 'DMSansBold',
		fontSize: 18,
		color: '#898F98',
	},
});

export default Events;
