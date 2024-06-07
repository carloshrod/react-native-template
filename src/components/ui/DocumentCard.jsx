import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { clipIcon, documentBwIcon } from '../../utils/icons';

const DocumentCard = ({ title, subtitle, description, date }) => {
	return (
		<View style={styles.card}>
			<View style={styles.cardHeader}>
				<View style={styles.iconContainer}>
					<Image style={styles.documentIcon} source={documentBwIcon} />
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.cardTitle}>{title}</Text>
					<Text style={styles.cardSubtitle}>{subtitle}</Text>
				</View>
			</View>
			<View style={styles.cardBody}>
				<Text>{description}</Text>
				<Text>{date}</Text>
			</View>
			<Pressable
				style={styles.cardFooter}
				onPress={() => alert('Viendo documento!')}
			>
				<Text style={styles.cardFooterText}>VER DOCUMENTO</Text>
				<Image source={clipIcon} />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: '100%',
		gap: 8,
		paddingVertical: 16,
		paddingHorizontal: 8,
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
	},
	cardHeader: {
		flexDirection: 'row',
		gap: 16,
	},
	iconContainer: {
		width: 58,
		height: 58,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#E4E8EB',
		borderRadius: 50,
	},
	documentIcon: {
		height: 20,
		width: 20,
	},
	titleContainer: {
		gap: 8,
	},
	cardTitle: {
		fontFamily: 'DMSansMedium',
		fontSize: 18,
	},
	cardSubtitle: {
		fontFamily: 'DMSans',
		fontSize: 12,
	},
	cardBody: {
		gap: 4,
		padding: 16,
		backgroundColor: '#F4F5F7',
	},
	cardFooter: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 4,
		padding: 2,
	},
	cardFooterText: {
		fontFamily: 'DMSans',
		fontSize: 12,
	},
});

export default DocumentCard;
