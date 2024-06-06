const userIcon = require('../../assets/images/user.png');
const mailIcon = require('../../assets/images/mail.png');
const keyIcon = require('../../assets/images/key.png');

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

const visitControlIcon = require('../../assets/images/visit-control.png');
const appointmentIcon = require('../../assets/images/appointment.png');
const paymentIcon = require('../../assets/images/payment.png');
const speakerIcon = require('../../assets/images/speaker.png');
const documentIcon = require('../../assets/images/document.png');
const alertIcon = require('../../assets/images/alert.png');

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

const userCheckIcon = require('../../assets/images/user-check.png');
const employeeIcon = require('../../assets/images/employee.png');
const documentBwIcon = require('../../assets/images/document-bw.png');
const badgeIcon = require('../../assets/images/badge.png');

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
