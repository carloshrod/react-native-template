import { FlatList, StyleSheet } from 'react-native';
import PrivateLayout from '../components/layout/PrivateLayout';
import DocumentCard from '../components/ui/DocumentCard';
import { DOCUMENTS_ITEMS } from '../utils/arrays';

const Documents = ({ navigation, route: { name } }) => {
	return (
		<PrivateLayout navigation={navigation} route={name}>
			<FlatList
				contentContainerStyle={styles.scrollContainer}
				style={styles.container}
				data={DOCUMENTS_ITEMS}
				renderItem={({ item }) => <DocumentCard {...item} />}
				keyExtractor={(item, index) => `${item.title}-${index}`}
				showsVerticalScrollIndicator={false}
			/>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		gap: 16,
		paddingVertical: 16,
	},
	container: {
		width: '100%',
	},
});

export default Documents;
