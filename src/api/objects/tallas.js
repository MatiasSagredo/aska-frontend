import axios from "axios";

/** @typedef {Object} tallas 
 * Objeto tallas
 * @property {number} idtallas - ID de la tallas
 * @property {string} nombretallas - Nombre de la tallas
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const tallas = {
    /** @returns {Promise<Array<tallas>>} */
    getAll: async () => {
        const response = await instance.get('/tallas');
        return response.data;
    },
    /**
     * @param {number} id - ID de la tallas a buscar
     * @returns {Promise<tallas>}
     */
    getById: async (id) => {
        const response = await instance.get(`/tallas/${id}`);
        return response.data;
    },
    /**
     * @param {tallas} data - Datos de la tallas a crear
     * @returns {Promise<tallas>} */
    createtallas: async (data) => {
        const response = await instance.post('/tallas', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la tallas a actualizar
     * @param {tallas} data - Datos de la tallas a actualizar
     * @returns {Promise<tallas>} 
     */
    updatetallasById: async (id, data) => {
        const response = await instance.put(`/tallas/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la tallas a actualizar
     * @param {Partial<tallas>} data - Datos parciales de la tallas a actualizar
     * @returns {Promise<tallas>} */
    patchtallasById: async (id, data) => {
        const response = await instance.patch(`/tallas/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la tallas a eliminar
     * @returns {Promise<void>} */
    deletetallasById: async (id) => {
        const response = await instance.delete(`/tallas/${id}`);
        return response.data;
    },
};

export default tallas;