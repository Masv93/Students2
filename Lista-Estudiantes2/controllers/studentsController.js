const studentsModel = require('../models/studentsModel');

class studentsController {

   // En tu controlador
async Todos() {
    try {
        const students = await studentsModel.Todos();
        console.log("Estudiantes obtenidos:", students); // Agrega un log
        return students;
    } catch (error) {
        console.error("Error al obtener estudiantes:", error); // Agrega un log
        throw error;
    }
}
      
    
    Uno(id) {
        return new Promise((resolve, reject) => {
            studentsModel.Uno(id)
                .then(result => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject('Estudiante no encontrado');
                    }
                })
                .catch(err => reject(err));
        });
    }

    Crear(datos) {
        return new Promise((resolve, reject) => {
            studentsModel.Crear(datos)
                .then(result => resolve(result))
                .catch(err => reject(err));
        });
    }

    Editar(id, datos) {
        return new Promise((resolve, reject) => {
            studentsModel.Editar(id, datos)
                .then(result => resolve(result))
                .catch(err => reject(err));
        });
    }

    Eliminar(id) {
        return new Promise((resolve, reject) => {
            studentsModel.Eliminar(id)
                .then(() => resolve())
                .catch(err => reject(err));
        });
    }

    Contar() {
        return new Promise((resolve, reject) => {
            studentsModel.Contar()
                .then(result => resolve(result))
                .catch(err => reject(err));
        });
    }

    BuscarNombre(nombre) {
        return new Promise((resolve, reject) => {
            studentsModel.MostrarNombre(nombre)
                .then(result => {
                    if (result.length > 0) {
                        resolve(result);
                    } else {
                        reject('No se encontraron estudiantes con ese nombre');
                    }
                })
                .catch(err => reject(err));
        });
    }

    MostrarCarrera(carrera) {
        return new Promise((resolve, reject) => {
            studentsModel.MostrarCarrera(carrera)
                .then(result => {
                    if (result.length > 0) {
                        resolve(result);
                    } else {
                        reject('No se encontraron estudiantes en esa carrera');
                    }
                })
                .catch(err => reject(err));
        });
    }
    
}

module.exports = new studentsController();