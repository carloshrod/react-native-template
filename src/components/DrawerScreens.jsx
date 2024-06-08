import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Documents from '../screens/Documents';
import { Image } from 'react-native';
import {
	CarSmIcon,
	DocumentSmIcon,
	ProfileIcon,
	SettingIcon,
	UserGroupIcon,
} from '../utils/icons';
import CustomDrawer from './layout/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerScreens = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Home'
			backBehavior='history'
			screenOptions={screenOptions}
			drawerContent={props => {
				return <CustomDrawer {...props} />;
			}}
		>
			<Drawer.Screen
				name='Drawer'
				component={Home}
				options={{ drawerItemStyle: { display: 'none' } }}
			/>
			<Drawer.Screen
				name='Asociados'
				options={{
					drawerIcon: () => <Image source={UserGroupIcon} />,
				}}
			>
				{() => <></>}
			</Drawer.Screen>
			<Drawer.Screen
				name='Vehículos'
				options={{
					drawerIcon: () => <Image source={CarSmIcon} />,
				}}
			>
				{() => <></>}
			</Drawer.Screen>
			<Drawer.Screen
				name='Documentos'
				component={Documents}
				options={{
					drawerIcon: ({ color }) => (
						<Image style={{ tintColor: color }} source={DocumentSmIcon} />
					),
				}}
			/>
			<Drawer.Screen
				name='Mi perfil'
				options={{
					drawerIcon: () => <Image source={ProfileIcon} />,
				}}
			>
				{() => <></>}
			</Drawer.Screen>
			<Drawer.Screen
				name='Configuración'
				options={{
					drawerIcon: () => <Image source={SettingIcon} />,
				}}
			>
				{() => <></>}
			</Drawer.Screen>
		</Drawer.Navigator>
	);
};

const screenOptions = {
	headerShown: false,
	drawerStyle: {
		backgroundColor: '#1A1C1F',
		paddingVertical: 20,
	},
	drawerItemStyle: {
		paddingHorizontal: 5,
	},
	drawerLabelStyle: {
		fontFamily: 'DMSansBold',
	},
	drawerActiveTintColor: '#FFFFFF',
	drawerInactiveTintColor: '#FFFFFF',
	drawerActiveBackgroundColor: 'transparent',
};

export default DrawerScreens;
