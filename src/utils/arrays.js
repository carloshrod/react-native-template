import {
	alertIcon,
	appointmentIcon,
	badgeIcon,
	documentBwIcon,
	documentIcon,
	employeeIcon,
	keyIcon,
	mailIcon,
	paymentIcon,
	speakerIcon,
	userCheckIcon,
	userIcon,
	visitControlIcon,
} from './icons';

export const INPUT_LOGIN_FIELDS = [
	{ label: 'Ingresa tu email', icon: mailIcon },
	{ label: 'Contraseña', icon: keyIcon },
];

export const INPUT_REGISTER_FIELDS = [
	{ label: 'Ingresa tu nombre', icon: userIcon },
	{ label: 'Ingresa tu email', icon: mailIcon },
	{ label: 'Contraseña', icon: keyIcon },
	{ label: 'Confirmar contraseña', icon: keyIcon },
];

export const NAVLINK_LABELS = [
	{
		label: 'Control de Visitas',
		icon: visitControlIcon,
		navigateTo: 'Control de Acceso',
	},
	{ label: 'Reservaciones', icon: appointmentIcon, navigateTo: 'Home' },
	{ label: 'Pagos', icon: paymentIcon, navigateTo: 'Home' },
	{ label: 'Comunicados', icon: speakerIcon, navigateTo: 'Home' },
	{ label: 'Clasificados', icon: documentIcon, navigateTo: 'Home' },
	{ label: 'Incidentes', icon: alertIcon, navigateTo: 'Home' },
];

export const ACCESS_CONTROL_ITEMS = [
	{
		label: 'Registro de visitante',
		icon: userCheckIcon,
		navigateTo: 'Registros de visitante',
	},
	{
		label: 'Empleados domésticos',
		icon: employeeIcon,
		navigateTo: 'Control de Acceso',
	},
	{
		label: 'Bitácoras de entradas',
		icon: documentBwIcon,
		navigateTo: 'Control de Acceso',
	},
	{
		label: 'Tarjetas de acceso',
		icon: badgeIcon,
		navigateTo: 'Control de Acceso',
	},
];

export const VISITOR_LOGS_ITEMS = [
	{
		label: 'Eventual',
		title: 'Visita de Luis Perez',
		date: '24/01/2024 18:00 hs',
		description:
			'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
	},
	{
		label: 'Frecuente',
		title: 'Visita de Carlos Hernández',
		date: '24/01/2024 18:00 hs',
		description:
			'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
	},
	{
		label: 'Serv.Domicilio/Paqueteria',
		title: 'Visita de Valentina Castro',
		date: '24/01/2024 18:00 hs',
		description:
			'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
	},
];

export const DOCUMENTS_ITEMS = [
	{
		title: 'Estados financieros',
		subtitle: 'Finanzas',
		description: 'Balance general y estado de resultados',
		date: 'Noviembre 2023',
	},
	{
		title: 'Estados financieros',
		subtitle: 'Finanzas',
		description: 'Balance general y estado de resultados',
		date: 'Diciembre 2023',
	},
	{
		title: 'Estados financieros',
		subtitle: 'Finanzas',
		description: 'Balance general y estado de resultados',
		date: 'Enero 2024',
	},
];
