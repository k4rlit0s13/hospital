import express from 'express';
import { getDoctors } from '../controllers/appcontroller.js';
import { API_VERSION } from '../versions/appversion.js';

const router = express.Router();

// Ruta para obtener la lista de doctores usando la versión de la API
router.get(`/${API_VERSION}/doctors`, getDoctors);

export default router;
