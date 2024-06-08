import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import { ArrowLeftIcon } from '../../utils/icons';

const GoBack = ({ top = 20, left = 20 }) => {
	const navigation = useNavigation();
	const { name } = useRoute();
	const isLight = name?.toLowerCase() === 'vehículos';

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={{
				position: 'absolute',
				top,
				left,
			}}
			onPress={() => navigation.goBack()}
		>
			<Image
				style={{ tintColor: isLight ? '#25292E' : '' }}
				source={ArrowLeftIcon}
			/>
		</TouchableOpacity>
	);
};

export default GoBack;
