import axios from "axios";

/** @typedef {Object} usuario 
 * Objeto usuario
 * @property {number} idusuario - ID de la usuario
 * @property {string} nombreusuario - Nombre de la usuario
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const usuario = {
    /** @returns {Promise<Array<usuario>>} */
    getAll: async () => {
        const response = await instance.get('/usuario');
        return response.data;
    },
    /**
     * @param {number} id - ID de la usuario a buscar
     * @returns {Promise<usuario>}
     */
    getById: async (id) => {
        const response = await instance.get(`/usuario/${id}`);
        return response.data;
    },
    /**
     * @param {usuario} data - Datos de la usuario a crear
     * @returns {Promise<usuario>} */
    createusuario: async (data) => {
        const response = await instance.post('/usuario', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la usuario a actualizar
     * @param {usuario} data - Datos de la usuario a actualizar
     * @returns {Promise<usuario>} 
     */
    updateusuarioById: async (id, data) => {
        const response = await instance.put(`/usuario/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la usuario a actualizar
     * @param {Partial<usuario>} data - Datos parciales de la usuario a actualizar
     * @returns {Promise<usuario>} */
    patchusuarioById: async (id, data) => {
        const response = await instance.patch(`/usuario/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la usuario a eliminar
     * @returns {Promise<void>} */
    deleteusuarioById: async (id) => {
        const response = await instance.delete(`/usuario/${id}`);
        return response.data;
    },
};

export default usuario;