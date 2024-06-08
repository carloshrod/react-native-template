import { View, StyleSheet } from 'react-native';
import Main from './Main';
import Navbar from './Navbar';

const PrivateLayout = ({ children }) => {
	return (
		<Main>
			<Navbar />
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
