import { StyleSheet, View } from 'react-native';
import Accordion from '../components/Accordion';
import PrivateLayout from '../components/PrivateLayout';

const VisitorLogs = ({ navigation, route: { name } }) => {
	return (
		<PrivateLayout navigation={navigation} route={name}>
			<View style={styles.container}>
				<Accordion label='Eventual' />
				<Accordion label='Frecuente' />
				<Accordion label='Serv.Domicilio/Paqueteria' />
			</View>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: 400,
		gap: 8,
	},
});

export default VisitorLogs;
