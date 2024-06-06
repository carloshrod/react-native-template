import { FlatList, StyleSheet } from 'react-native';
import Accordion from '../components/Accordion';
import PrivateLayout from '../components/PrivateLayout';

const VisitorLogs = ({ navigation, route: { name } }) => {
	return (
		<PrivateLayout navigation={navigation} route={name}>
			<FlatList
				style={styles.container}
				data={['Eventual', 'Frecuente', 'Serv.Domicilio/Paqueteria']}
				renderItem={({ item }) => <Accordion label={item} />}
				keyExtractor={item => item}
				showsVerticalScrollIndicator={false}
			/>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: 400,
	},
});

export default VisitorLogs;
