import express from 'express';
import DoctorController from '../controllers/appcontroller.js'; // Importar el controlador
import { API_VERSION } from '../versions/appversion.js';

const router = express.Router();

// Ruta para obtener la lista de doctores
router.get(`/${API_VERSION}/doctors`, DoctorController.getDoctors);

// Ruta para agregar un nuevo doctor
router.post(`/${API_VERSION}/newdoctor`, DoctorController.addDoctor);

// Ruta para eliminar un doctor por ID
router.delete(`/${API_VERSION}/delete/:id`, DoctorController.deleteDoctor);

export default router;
