import { View, Text, StyleSheet, Image } from 'react-native';

const logo = '../../../assets/images/splash.png';
const qrExample = '../../../assets/images/qr-example.png';

const QRCard = () => {
	const createdAt = '24/01/2024 18:00 hs';
	const expiresAt = '25/01/2024 18:00 hs';
	const guest = 'Luis Perez';

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require(logo)} />
			<View style={styles.scanContainer}>
				<Image style={styles.image} source={require(qrExample)} />
				<Text style={styles.scanText}>SCAN ME</Text>
			</View>
			<View style={styles.info}>
				<Text style={styles.infoText}>Creado: {createdAt}</Text>
				<Text style={styles.infoText}>Expira: {expiresAt}</Text>
				<Text style={styles.infoText}>Invitado: {guest}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		width: '100%',
		alignItems: 'center',
		gap: 16,
		paddingTop: 96,
		paddingHorizontal: 64,
		paddingBottom: 40,
		marginTop: 40,
		borderWidth: 1,
		borderColor: '#FFCD06',
		borderRadius: 16,
	},
	logo: {
		position: 'absolute',
		top: -45,
	},
	scanContainer: {
		minWidth: 185,
		minHeight: 226,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 8,
		backgroundColor: '#FFCD06',
		borderRadius: 16,
	},
	image: {
		maxWidth: 300,
		maxHeight: 300,
	},
	scanText: {
		fontFamily: 'InterXBold',
		fontSize: 25,
	},
	info: {
		gap: 8,
	},
	infoText: {
		fontFamily: 'DMSansBold',
		fontSize: 14,
		color: '#FFFFFF',
	},
});

export default QRCard;
