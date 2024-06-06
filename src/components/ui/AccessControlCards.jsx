import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	FlatList,
	Image,
	Pressable,
} from 'react-native';
import { ACCESS_CONTROL_ITEMS } from '../../utils/consts';

const { width } = Dimensions.get('window');
const columnCount = 2;
const itemWidth = (width - 14) / columnCount - 32;

const Grid = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={ACCESS_CONTROL_ITEMS}
				renderItem={({ item }) => (
					<Pressable
						style={styles.gridItem}
						onPress={() => navigation.navigate(item.navigateTo)}
					>
						<Image source={item.icon} />
						<Text style={styles.gridItemLabel}>{item.label}</Text>
					</Pressable>
				)}
				keyExtractor={item => item.label}
				numColumns={columnCount}
				columnWrapperStyle={styles.row}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	gridItem: {
		width: itemWidth,
		height: 108,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 8,
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
	},
	gridItemLabel: {
		width: '50%',
		marginTop: 8,
		textAlign: 'center',
		fontFamily: 'DMSansBold',
		fontSize: 14,
		color: '#25292E',
	},
});

export default Grid;
