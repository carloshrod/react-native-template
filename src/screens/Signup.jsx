import AuthLayout from '../components/layout/AuthLayout';
import FormAuth from '../components/form/FormAuth';
import { useNavigation } from '@react-navigation/native';
import GoBack from '../components/ui/GoBack';

const Signup = () => {
	const navigation = useNavigation();
	const onSubmit = () => navigation?.navigate('Login');

	return (
		<AuthLayout>
			<GoBack />
			<FormAuth onSubmit={onSubmit} />
		</AuthLayout>
	);
};

export default Signup;
