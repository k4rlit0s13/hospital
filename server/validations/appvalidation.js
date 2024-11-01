// appvalidations.js
import { body } from 'express-validator';
import rateLimit from 'express-rate-limit';


export const validateDoctor = [
  body('nombre')
    .notEmpty().withMessage('Name is required.')
    .isString().withMessage('Name must be a string.')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long.')
    .trim().escape(),
  
  body('apellido')
    .notEmpty().withMessage('Last name is required.')
    .isString().withMessage('Last name must be a string.')
    .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long.')
    .trim().escape(),

  body('genero')
    .notEmpty().withMessage('Gender is required.')
    .isIn(['Masculino', 'Femenino', 'O']).withMessage('Gender must be Masculino, Femenino, or O.'),

  body('especialidad_fk')
    .notEmpty().withMessage('Specialty ID is required.')
    .isInt().withMessage('Specialty ID must be a valid integer.'),

  body('fecha_nacimiento')
    .notEmpty().withMessage('Date of birth is required.')
    .isDate({ format: 'YYYY-MM-DD' }).withMessage('Date of birth must be in YYYY-MM-DD format.'),

  body('tipo_contacto')
    .notEmpty().withMessage('Contact type is required.')
    .isIn(['Telefono', 'Email']).withMessage('Contact type must be either Telefono or Email.'),

  body('contacto')
    .notEmpty().withMessage('Contact information is required.')
    .if(body('tipo_contacto').equals('Email'))
    .isEmail().withMessage('Must be a valid email address.')
    .if(body('tipo_contacto').equals('Telefono'))
    .isMobilePhone().withMessage('Must be a valid mobile phone number.')
    .trim().escape()
];



// Rate limiter middleware
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 25, // Limit each IP to 3 requests per windowMs
  message: 'Too many requests, please try again in 15 minutes.', // Message sent when limit is reached
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// limitador de añadir doctores
export const limitadd = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 45,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    console.log('Rate limit exceeded for IP:', req.ip);
    res.status(429).json({ error: 'Too many requests, please try again later.' });
  }
});

// limitador de añadir doctores
export const limitdelete = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutos
  max: 10,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    console.log('Rate limit exceeded for IP:', req.ip);
    res.status(429).json({ error: 'Too many requests, please try again later.' });
  }
});