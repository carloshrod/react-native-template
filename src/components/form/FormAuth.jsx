import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';
import { INPUT_LOGIN_FIELDS, INPUT_REGISTER_FIELDS } from '../../utils/consts';
import { useRoute } from '@react-navigation/native';
import Button from '../ui/Button';

const FormAuth = ({ onSubmit, children }) => {
	const { name } = useRoute();
	const isLogin = name?.toLowerCase() === 'login';

	const inputFields = isLogin ? INPUT_LOGIN_FIELDS : INPUT_REGISTER_FIELDS;
	const title = isLogin
		? 'INICIA SESIÓN CON TU CUENTA'
		: 'CREAR UNA NUEVA CUENTA';
	const btnLabel = isLogin ? 'Iniciar Sesión' : 'Registrarse';

	return (
		<View style={styles.form}>
			<Text style={styles.title}>{title}</Text>
			{inputFields.map((input, index) => (
				<Input key={index} label={input.label} icon={input.icon} />
			))}
			<Button label={btnLabel} onSubmit={onSubmit} />
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	form: {
		width: '100%',
		maxWidth: 400,
		paddingHorizontal: 16,
		paddingVertical: 24,
		gap: 16,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
		elevation: 3,
		shadowColor: '#000000', // Color de la sombra
		shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra (x, y)
		shadowOpacity: 0.33, // Opacidad de la sombra
		shadowRadius: 24,
	},
	title: {
		fontFamily: 'DMSans',
		marginBottom: 16,
	},
});

export default FormAuth;
