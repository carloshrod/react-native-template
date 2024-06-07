import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import { arrowLeftIcon } from '../../utils/icons';

const GoBack = ({ top = 20, left = 20 }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={{ position: 'absolute', top, left }}
			onPress={() => navigation.goBack()}
		>
			<Image source={arrowLeftIcon} />
		</TouchableOpacity>
	);
};

export default GoBack;
