import { Alert, FlatList, StyleSheet } from 'react-native';
import PrivateLayout from '../components/layout/PrivateLayout';
import Accordion from '../components/ui/Accordion';
import { ACTIONS, VISITOR_LOGS_ITEMS } from '../utils/arrays';
import { FloatingAction } from 'react-native-floating-action';

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
			<FloatingAction
				actions={ACTIONS}
				onPressItem={name => {
					Alert.alert(`Agregando: ${name}`);
				}}
				color='#FFCD06'
			/>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: 600,
		paddingVertical: 16,
	},
});

export default VisitorLogs;
