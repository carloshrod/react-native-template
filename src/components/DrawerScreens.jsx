import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Documents from '../screens/Documents';
import { Image } from 'react-native';
import {
	carSmIcon,
	documentSmIcon,
	profileIcon,
	settingIcon,
	userGroupIcon,
} from '../utils/icons';
import Constants from 'expo-constants';
import CustomDrawer from './layout/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerScreens = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Home'
			backBehavior='history'
			screenOptions={{
				headerShown: false,
				drawerStyle: {
					backgroundColor: '#1A1C1F',
					marginTop: Constants.statusBarHeight,
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
			}}
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
					drawerIcon: () => <Image source={userGroupIcon} />,
				}}
			>
				{() => <></>}
			</Drawer.Screen>
			<Drawer.Screen
				name='Vehículos'
				options={{
					drawerIcon: () => <Image source={carSmIcon} />,
				}}
			>
				{() => <></>}
			</Drawer.Screen>
			<Drawer.Screen
				name='Documentos'
				component={Documents}
				options={{
					drawerIcon: ({ color }) => (
						<Image style={{ tintColor: color }} source={documentSmIcon} />
					),
				}}
			/>
			<Drawer.Screen
				name='Mi perfil'
				options={{
					drawerIcon: () => <Image source={profileIcon} />,
				}}
			>
				{() => <></>}
			</Drawer.Screen>
			<Drawer.Screen
				name='Configuración'
				options={{
					drawerIcon: () => <Image source={settingIcon} />,
				}}
			>
				{() => <></>}
			</Drawer.Screen>
		</Drawer.Navigator>
	);
};

export default DrawerScreens;
