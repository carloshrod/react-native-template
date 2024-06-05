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
		navigateTo: 'AccessControl',
	},
	{ label: 'Reservaciones', icon: appointmentIcon, navigateTo: '' },
	{ label: 'Pagos', icon: paymentIcon, navigateTo: '' },
	{ label: 'Comunicados', icon: speakerIcon, navigateTo: '' },
	{ label: 'Clasificado', icon: documentIcon, navigateTo: '' },
	{ label: 'Incidentes', icon: alertIcon, navigateTo: '' },
];
