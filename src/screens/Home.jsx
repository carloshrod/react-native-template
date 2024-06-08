import { FlatList, StyleSheet, Text } from 'react-native';
import PrivateLayout from '../components/layout/PrivateLayout';
import NavLink from '../components/ui/NavLink';
import { NAVLINK_LABELS } from '../utils/arrays';

const Home = () => {
	const user = 'Leonardo';

	return (
		<PrivateLayout>
			<Text style={styles.title}>Bienvenido {user}</Text>
			<Text style={styles.subTitle}>¿En qué podemos ayudarte?</Text>
			<FlatList
				style={styles.navContainer}
				data={NAVLINK_LABELS}
				renderItem={({ item }) => <NavLink {...item} />}
				keyExtractor={item => item.label}
				showsVerticalScrollIndicator={false}
			/>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	title: {
		paddingTop: 16,
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
		flex: 1,
		marginTop: 32,
	},
});

export default Home;
