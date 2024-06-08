import {
	AlertIcon,
	AppointmentIcon,
	BadgeIcon,
	DocumentBwIcon,
	DocumentIcon,
	EmployeeIcon,
	KeyIcon,
	MailIcon,
	PaymentIcon,
	PlusIcon,
	SpeakerIcon,
	UserCheckIcon,
	UserIcon,
	VisitControlIcon,
} from './icons';

export const INPUT_LOGIN_FIELDS = [
	{ label: 'Ingresa tu email', icon: MailIcon },
	{ label: 'Contraseña', icon: KeyIcon },
];

export const INPUT_REGISTER_FIELDS = [
	{ label: 'Ingresa tu nombre', icon: UserIcon },
	{ label: 'Ingresa tu email', icon: MailIcon },
	{ label: 'Contraseña', icon: KeyIcon },
	{ label: 'Confirmar contraseña', icon: KeyIcon },
];

export const NAVLINK_LABELS = [
	{
		label: 'Control de Visitas',
		icon: VisitControlIcon,
		navigateTo: 'Control de Acceso',
	},
	{ label: 'Reservaciones', icon: AppointmentIcon, navigateTo: 'Home' },
	{ label: 'Pagos', icon: PaymentIcon, navigateTo: 'Home' },
	{ label: 'Comunicados', icon: SpeakerIcon, navigateTo: 'Home' },
	{ label: 'Clasificados', icon: DocumentIcon, navigateTo: 'Home' },
	{ label: 'Incidentes', icon: AlertIcon, navigateTo: 'Home' },
];

export const ACCESS_CONTROL_ITEMS = [
	{
		label: 'Registro de visitante',
		icon: UserCheckIcon,
		navigateTo: 'Registros de visitante',
	},
	{
		label: 'Empleados domésticos',
		icon: EmployeeIcon,
		navigateTo: 'Control de Acceso',
	},
	{
		label: 'Bitácoras de entradas',
		icon: DocumentBwIcon,
		navigateTo: 'Control de Acceso',
	},
	{
		label: 'Tarjetas de acceso',
		icon: BadgeIcon,
		navigateTo: 'Control de Acceso',
	},
];

export const VISITOR_LOGS_ITEMS = [
	{
		label: 'Eventual',
		logs: [
			{
				title: 'Visita de Luis Perez',
				date: '24/01/2024 18:00 hs',
				description:
					'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
			},
			{
				title: 'Visita de Valentina Castro',
				date: '24/01/2024 18:00 hs',
				description:
					'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
			},
		],
	},
	{
		label: 'Frecuente',
		logs: [
			{
				title: 'Visita de Carlos Hernández',
				date: '24/01/2024 18:00 hs',
				description:
					'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
			},
		],
	},
	{
		label: 'Serv.Domicilio/Paqueteria',
		logs: [
			{
				title: 'Visita de Pedro Salgado',
				date: '24/01/2024 18:00 hs',
				description:
					'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
			},
		],
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

export const ACTIONS = [
	{
		text: 'Agregar Visita Eventual',
		icon: PlusIcon,
		name: 'eventual',
		position: 1,
		color: '#FFCD06',
	},
	{
		text: 'Agregar Visita Frecuente',
		icon: PlusIcon,
		name: 'frequent',
		position: 2,
		color: '#FFCD06',
	},
	{
		text: 'Agregar Paquetería',
		icon: PlusIcon,
		name: 'package',
		position: 3,
		color: '#FFCD06',
	},
	{
		text: 'Agregar Empleado',
		icon: PlusIcon,
		name: 'employee',
		position: 4,
		color: '#FFCD06',
	},
];

export const ACTIONS_MENU = [
	{
		icon: PlusIcon,
		label: 'Editar',
	},
	{
		icon: PlusIcon,
		label: 'Copiar',
	},
	{
		icon: PlusIcon,
		label: 'Borrar',
	},
];
