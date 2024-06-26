import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Events from '../screens/Events';
import QR from '../screens/QR';
import AccessControl from '../screens/AccessControl';
import VisitorLogs from '../screens/VisitorLogs';
import { CalendarIcon, HomeIcon, QRIcon } from '../utils/icons';
import DrawerScreens from './DrawerScreens';

const Tab = createBottomTabNavigator();

const ProtectedScreens = () => {
	return (
		<Tab.Navigator
			initialRouteName='Drawer'
			screenOptions={screenOptions}
			backBehavior='history'
		>
			<Tab.Screen
				name='Home'
				component={DrawerScreens}
				options={{
					tabBarIcon: ({ color }) => (
						<Image style={{ tintColor: color }} source={HomeIcon} />
					),
				}}
			/>
			<Tab.Screen
				name='Eventos'
				component={Events}
				options={{
					tabBarIcon: ({ color }) => (
						<Image style={{ tintColor: color }} source={CalendarIcon} />
					),
				}}
			/>
			<Tab.Screen
				name='QR'
				component={QR}
				options={{
					tabBarIcon: ({ color }) => (
						<Image style={{ tintColor: color }} source={QRIcon} />
					),
				}}
			/>
			{/* ⬇ Screens hidden in tabBar ⬇ */}
			<Tab.Screen
				name='Control de Acceso'
				component={AccessControl}
				options={{ tabBarButton: () => null }}
			/>
			<Tab.Screen
				name='Registros de visitante'
				component={VisitorLogs}
				options={{ tabBarButton: () => null }}
			/>
		</Tab.Navigator>
	);
};

const screenOptions = {
	headerShown: false,
	tabBarStyle: {
		paddingVertical: 10,
		backgroundColor: '#000000',
	},
	tabBarInactiveTintColor: '#FFFFFF',
	tabBarActiveTintColor: '#FFCD06',
	tabBarLabelStyle: {
		fontFamily: 'DMSansBold',
		fontSize: 12,
	},
};

export default ProtectedScreens;
