import { Image, StyleSheet, View } from 'react-native';
import Main from './Main';
import { splash } from '../../utils/images';

const AuthLayout = ({ children }) => {
	return (
		<Main>
			<View style={styles.container}>
				<Image source={splash} />
				{children}
			</View>
		</Main>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 40,
		paddingHorizontal: 24,
		backgroundColor: '#25292E',
	},
});

export default AuthLayout;
