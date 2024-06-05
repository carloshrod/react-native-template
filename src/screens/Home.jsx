import { StyleSheet, Text, View } from 'react-native';
import PrivateLayout from '../components/PrivateLayout';
import NavLink from '../components/NavLink';
import { NAVLINK_LABELS } from '../utils/consts';

const Home = ({ navigation }) => {
	const user = 'Leonardo';

	return (
		<PrivateLayout>
			<Text style={styles.title}>Bienvenido {user}</Text>
			<Text style={styles.subTitle}>¿En qué podemos ayudarte?</Text>
			<View style={styles.navContainer}>
				{NAVLINK_LABELS.map(({ label, icon, navigateTo }, index) => (
					<NavLink
						key={`link-${index}`}
						label={label}
						icon={icon}
						navigateTo={navigateTo}
						navigation={navigation}
					/>
				))}
			</View>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	title: {
		marginBottom: 8,
		fontFamily: 'DMSansBold',
		fontSize: 24,
		color: '#FFFFFF',
	},
	subTitle: {
		fontFamily: 'DMSans',
		fontSize: 16,
		color: '#FFFFFF',
	},
	navContainer: {
		width: '100%',
		maxWidth: 400,
		gap: 16,
		marginTop: 32,
	},
});

export default Home;
