import { View, StyleSheet } from 'react-native';
import Main from './Main';
import Navbar from './Navbar';

const PrivateLayout = ({ navigation, route = undefined, children }) => {
	return (
		<Main>
			<Navbar navigation={navigation} route={route} />
			<View style={styles.container}>{children}</View>
		</Main>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 24,
		backgroundColor: '#25292E',
	},
});

export default PrivateLayout;
