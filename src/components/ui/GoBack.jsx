import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';

const GoBack = ({ top = 20, left = 20 }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={{ position: 'absolute', top, left }}
			onPress={() => navigation.goBack()}
		>
			<Image source={require('../../../assets/images/arrow-left.png')} />
		</TouchableOpacity>
	);
};

export default GoBack;
