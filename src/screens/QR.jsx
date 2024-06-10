import { ScrollView, StyleSheet } from 'react-native';
import PrivateLayout from '../components/layout/PrivateLayout';
import QRCard from '../components/ui/QRCard';
import ImportantCard from '../components/ui/ImportantCard';

const QR = () => {
	return (
		<PrivateLayout>
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				showsVerticalScrollIndicator={false}
			>
				<QRCard />
				<ImportantCard />
			</ScrollView>
		</PrivateLayout>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		maxWidth: 600,
		gap: 16,
		paddingVertical: 32,
	},
});

export default QR;
