const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController'); // Asegúrate de que este sea el nombre correcto del archivo del controlador

// Ruta para obtener todos los estudiantes y renderizar la vista
router.get('/', async (req, res) => {
    try {
        const students = await studentsController.Todos();
        res.render('students', { students });
    } catch (error) {
        res.status(500).render('error', { error: error.message });
    }
});

// Ruta para obtener un estudiante por ID y renderizar la vista
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const student = await studentsController.Uno(id);
        res.render('student', { student });
    } catch (error) {
        res.status(404).render('error', { error: error.message });
    }
});

// Ruta para crear un nuevo estudiante y redirigir a la lista

router.post('/', async (req, res) => {
    try {
        const newStudent = req.body;
        await studentsController.Crear(newStudent);
        res.redirect('/students');
    } catch (error) {
        res.status(500).render('error', { error });
    }
});

// Ruta para actualizar un estudiante por ID y redirigir a la lista
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const estudianteData = req.body;
    try {
        await studentsController.Editar(id, estudianteData);
        res.redirect('/students');
    } catch (error) {
        res.status(500).render('error', { error: error.message });
    }
});

// Ruta para eliminar un estudiante por ID y redirigir a la lista
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        await studentsController.Eliminar(id);
        res.redirect('/students');
    } catch (error) {
        res.status(500).render('error', { error: error.message });
    }
});

// Ruta para contar el número de estudiantes y renderizar la vista
router.get('/count', async (req, res) => {
    try {
        const total = await studentsController.Contar();
        res.render('count', { total });
    } catch (error) {
        res.status(500).render('error', { error: error.message });
    }
});

// Ruta para buscar estudiantes por nombre y renderizar la vista
router.get('/search', async (req, res) => {
    const nombre = req.query.nombre;
    try {
        const students = await studentsController.BuscarNombre(nombre);
        res.render('students', { students });
    } catch (error) {
        res.status(500).render('error', { error: error.message });
    }
});

// Ruta para mostrar estudiantes por carrera y renderizar la vista
router.get('/career', async (req, res) => {
    const carrera = req.query.carrera;
    try {
        const students = await studentsController.MostrarCarrera(carrera);
        res.render('students', { students });
    } catch (error) {
        res.status(500).render('error', { error: error.message });
    }
});

module.exports = router;