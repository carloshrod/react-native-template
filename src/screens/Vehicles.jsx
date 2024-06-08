import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import PrivateLayout from '../components/layout/PrivateLayout';
import { CarLgIcon } from '../utils/icons';
import Button from '../components/ui/Button';

const Vehicles = () => {
	const noVehicle = 'No hay vehículos registrados';
	const vehicleName = 'Todos tus vehículos aparecerán aquí';

	return (
		<PrivateLayout>
			<View style={styles.eventContainer}>
				<Image source={CarLgIcon} />
				<Text style={styles.eventName}>{noVehicle}</Text>
				<Text style={styles.guestsName}>{vehicleName}</Text>
				<Button
					label='Registrar vehículos'
					onPress={() => Alert.alert('Registrando vehículos!')}
				/>
			</View>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
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

export default Vehicles;
