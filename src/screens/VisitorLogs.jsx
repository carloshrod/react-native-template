import { FlatList, StyleSheet } from 'react-native';
import PrivateLayout from '../components/layout/PrivateLayout';
import Accordion from '../components/ui/Accordion';
import { VISITOR_LOGS_ITEMS } from '../utils/arrays';

const VisitorLogs = () => {
	return (
		<PrivateLayout>
			<FlatList
				style={styles.container}
				data={VISITOR_LOGS_ITEMS}
				renderItem={({ item }) => <Accordion {...item} />}
				keyExtractor={item => item.label}
				showsVerticalScrollIndicator={false}
			/>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: 400,
		paddingVertical: 16,
	},
});

export default VisitorLogs;
