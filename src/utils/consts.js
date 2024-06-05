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
