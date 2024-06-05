import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import FormAuth from '../components/FormAuth';
import AuthLayout from '../components/AuthLayout';

const Signup = ({ navigation }) => {
	return (
		<AuthLayout>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.back}
				onPress={() => navigation.navigate('Login')}
			>
				<Image source={require('../../assets/images/arrow-left.png')} />
			</TouchableOpacity>
			<FormAuth />
		</AuthLayout>
	);
};

const styles = StyleSheet.create({
	back: {
		position: 'absolute',
		top: 24,
		left: 0,
	},
});

export default Signup;
