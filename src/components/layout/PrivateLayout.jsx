import { View, StyleSheet } from 'react-native';
import Main from './Main';
import Navbar from './Navbar';
import { useRoute } from '@react-navigation/native';

const PrivateLayout = ({ children }) => {
	const { name } = useRoute();
	const BG_LIGHT = ['eventos', 'vehículos'];
	const isBgDark = !BG_LIGHT.includes(name?.toLowerCase());

	return (
		<Main>
			<Navbar />
			<View
				style={[
					styles.container,
					{ backgroundColor: isBgDark ? '#25292E' : '#FFFFFF' },
				]}
			>
				{children}
			</View>
		</Main>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 24,
	},
});

export default PrivateLayout;
