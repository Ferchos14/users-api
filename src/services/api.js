import { deleteUser, getUsers, createUser, updateUser } from './services/api.js';
const API_BASE_URL = 'http://localhost:8080/api/users'; // URL base para la API

// src/services/api.js

const API_BASE_URL = 'http://localhost:8080/api/users';

// ... (getUsers y createUser previamente definidos) ...

/**
 * 3. PUT /api/users/:id - Actualizar usuario
 * Lo necesitamos para el Paso 3.4
 */
export const updateUser = async (id, userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar el usuario.');
    }
    return response.json();
  } catch (error) {
    console.error("Error en updateUser:", error);
    throw error;
  }
};


/**
 * 4. DELETE /api/users/:id - Eliminar usuario (Paso 3.5)
 */
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE', // Método DELETE
    });

    if (!response.ok) {
        throw new Error('Error al eliminar el usuario.');
    }
    // El DELETE exitoso a menudo no devuelve contenido (status 204 No Content)
    return true; 
  } catch (error) {
    console.error("Error en deleteUser:", error);
    throw error;
  }
};