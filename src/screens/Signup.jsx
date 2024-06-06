import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import AuthLayout from '../components/layout/AuthLayout';
import FormAuth from '../components/form/FormAuth';
import Button from '../components/ui/Button';

const Signup = ({ navigation }) => {
	const onSubmit = () => navigation?.navigate('Login');

	return (
		<AuthLayout>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.back}
				onPress={() => navigation.goBack()}
			>
				<Image source={require('../../assets/images/arrow-left.png')} />
			</TouchableOpacity>
			<FormAuth>
				<Button label='Registrarse' onSubmit={onSubmit} />
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
