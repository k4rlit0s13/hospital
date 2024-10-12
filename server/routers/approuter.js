import express from 'express';
import DoctorController from '../controllers/appcontroller.js'; // Asegúrate de importar la clase
import { API_VERSION } from '../versions/appversion.js';

const router = express.Router();

// Ruta para obtener la lista de doctores usando la versión de la API
router.get(`/${API_VERSION}/doctors`, DoctorController.getDoctors);

// Ruta para crear un nuevo doctor
router.post(`/${API_VERSION}/newdoctor`, DoctorController.addDoctor); // Nueva ruta para agregar un doctor

export default router;
