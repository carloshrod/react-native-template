import { Text } from 'react-native';
import PrivateLayout from '../components/layout/PrivateLayout';

const Events = () => {
	return (
		<PrivateLayout>
			<Text
				style={{ marginTop: 16, fontFamily: 'DMSansBold', color: '#FFFFFF' }}
			>
				Eventos
			</Text>
		</PrivateLayout>
	);
};

export default Events;
