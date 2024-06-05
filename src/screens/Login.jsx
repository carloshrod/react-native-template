import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AuthLayout from '../components/AuthLayout';
import FormAuth from '../components/FormAuth';

const Login = ({ navigation, route: { name } }) => {
	const isLogin = name?.toLowerCase() === 'login';

	return (
		<AuthLayout>
			<FormAuth isLogin={isLogin}>
				<View style={styles.linksContainer}>
					<Text style={styles.link}>Olvidaste tu contraseña?</Text>
					<View style={styles.separator} />
					<View style={styles.newAccount}>
						<Text style={styles.link}>Crear una nueva cuenta?</Text>
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={() => navigation.navigate('Signup')}
						>
							<Text style={styles.link}>Click aquí</Text>
						</TouchableOpacity>
					</View>
				</View>
			</FormAuth>
		</AuthLayout>
	);
};

const styles = StyleSheet.create({
	linksContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
		marginTop: 40,
	},
	link: {
		fontFamily: 'DMSans',
		fontSize: 12,
		color: '#25292E',
	},
	separator: {
		width: 33,
		borderBottomColor: '#25292E',
		borderBottomWidth: 2,
		marginTop: 10,
	},
	newAccount: {
		flexDirection: 'row',
		gap: 4,
	},
});

export default Login;
