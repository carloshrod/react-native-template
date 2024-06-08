import { StyleSheet, Text, View } from 'react-native';
import PrivateLayout from '../components/layout/PrivateLayout';
import Checkbox from '../components/ui/Checkbox';
import AccessControlCards from '../components/ui/AccessControlCards';

const AccessControl = () => {
	return (
		<PrivateLayout>
			<View style={styles.allow}>
				<Text style={styles.allowText}>Permitir visitas</Text>
				<Checkbox />
			</View>
			<Text style={styles.title}>
				Mantené el control de tus visitas desde cualquier lugar
			</Text>
			<AccessControlCards />
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	allow: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 16,
		marginBottom: 24,
	},
	allowText: {
		fontFamily: 'Inter',
		fontSize: 14,
		color: '#FFFFFF',
	},
	title: {
		marginBottom: 24,
		textAlign: 'center',
		fontFamily: 'DMSans',
		fontSize: 16,
		color: '#FFFFFF',
	},
});

export default AccessControl;
