const { body } = require('express-validator');

const validateDoctor = [
  body('nombre')
    .notEmpty().withMessage('First name is required.')
    .isString().withMessage('First name must be a string.')
    .isLength({ min: 2 }).withMessage('First name must be at least 2 characters long.')
    .trim().escape(),
  
  body('apellido')
    .notEmpty().withMessage('Last name is required.')
    .isString().withMessage('Last name must be a string.')
    .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long.')
    .trim().escape(),

  body('genero')
    .isIn(['Masculino', 'Femenino', 'O']).withMessage('Gender must be Masculino, Femenino, or O.'),

  body('especialidad_fk')
    .notEmpty().withMessage('Specialty ID is required.')
    .isInt().withMessage('Specialty ID must be a valid integer.'),

  body('fecha_nacimiento')
    .notEmpty().withMessage('Date of birth is required.')
    .isDate({ format: 'YYYY-MM-DD' }).withMessage('Date of birth must be in YYYY-MM-DD format.'),

  body('tipo_contacto')
    .isIn(['Telefono', 'Email']).withMessage('Contact type must be either Telefono or Email.'),

  body('contacto')
    .if(body('tipo_contacto').equals('Email'))
    .isEmail().withMessage('Must be a valid email address.')
    .if(body('tipo_contacto').equals('Telefono'))
    .isMobilePhone().withMessage('Must be a valid phone number.')
    .trim().escape()
];

module.exports = {
  validateDoctor
};
