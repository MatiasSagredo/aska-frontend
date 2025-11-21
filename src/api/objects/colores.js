import axios from "axios";

/** @typedef {Object} colores 
 * Objeto colores
 * @property {number} idcolores - ID de la colores
 * @property {string} nombrecolores - Nombre de la colores
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const colores = {
    /** @returns {Promise<Array<colores>>} */
    getAll: async () => {
        const response = await instance.get('/colores');
        return response.data;
    },
    /**
     * @param {number} id - ID de la colores a buscar
     * @returns {Promise<colores>}
     */
    getById: async (id) => {
        const response = await instance.get(`/colores/${id}`);
        return response.data;
    },
    /**
     * @param {colores} data - Datos de la colores a crear
     * @returns {Promise<colores>} */
    createcolores: async (data) => {
        const response = await instance.post('/colores', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la colores a actualizar
     * @param {colores} data - Datos de la colores a actualizar
     * @returns {Promise<colores>} 
     */
    updatecoloresById: async (id, data) => {
        const response = await instance.put(`/colores/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la colores a actualizar
     * @param {Partial<colores>} data - Datos parciales de la colores a actualizar
     * @returns {Promise<colores>} */
    patchcoloresById: async (id, data) => {
        const response = await instance.patch(`/colores/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la colores a eliminar
     * @returns {Promise<void>} */
    deletecoloresById: async (id) => {
        const response = await instance.delete(`/colores/${id}`);
        return response.data;
    },
};

export default colores;