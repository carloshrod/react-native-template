import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import AuthLayout from '../components/AuthLayout';
import FormAuth from '../components/FormAuth';
import Button from '../components/Button';

const Signup = ({ navigation }) => {
	const navigateTo = () => navigation?.navigate('Login');

	return (
		<AuthLayout>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.back}
				onPress={() => navigation.navigate('Login')}
			>
				<Image source={require('../../assets/images/arrow-left.png')} />
			</TouchableOpacity>
			<FormAuth>
				<Button label='Registrarse' navigateTo={navigateTo} />
			</FormAuth>
		</AuthLayout>
	);
};

const styles = StyleSheet.create({
	back: {
		position: 'absolute',
		top: 20,
		left: 20,
	},
});

export default Signup;
