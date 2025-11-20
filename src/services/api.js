import {
  deleteUser,
  getUsers,
  createUser,
  updateUser,
} from "./services/api.js";
const API_BASE_URL = "http://localhost:8080/api/users";
const API_BASE_URL = "http://localhost:8080/api/users";

export const updateUser = async (id, userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al actualizar el usuario.");
    }
    return response.json();
  } catch (error) {
    console.error("Error en updateUser:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar el usuario.");
    }

    return true;
  } catch (error) {
    console.error("Error en deleteUser:", error);
    throw error;
  }
};
