import axios from "axios";

/** @typedef {Object} materiales 
 * Objeto materiales
 * @property {number} idmateriales - ID de la materiales
 * @property {string} nombremateriales - Nombre de la materiales
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const materiales = {
    /** @returns {Promise<Array<materiales>>} */
    getAll: async () => {
        const response = await instance.get('/materiales');
        return response.data;
    },
    /**
     * @param {number} id - ID de la materiales a buscar
     * @returns {Promise<materiales>}
     */
    getById: async (id) => {
        const response = await instance.get(`/materiales/${id}`);
        return response.data;
    },
    /**
     * @param {materiales} data - Datos de la materiales a crear
     * @returns {Promise<materiales>} */
    createmateriales: async (data) => {
        const response = await instance.post('/materiales', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la materiales a actualizar
     * @param {materiales} data - Datos de la materiales a actualizar
     * @returns {Promise<materiales>} 
     */
    updatematerialesById: async (id, data) => {
        const response = await instance.put(`/materiales/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la materiales a actualizar
     * @param {Partial<materiales>} data - Datos parciales de la materiales a actualizar
     * @returns {Promise<materiales>} */
    patchmaterialesById: async (id, data) => {
        const response = await instance.patch(`/materiales/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la materiales a eliminar
     * @returns {Promise<void>} */
    deletematerialesById: async (id) => {
        const response = await instance.delete(`/materiales/${id}`);
        return response.data;
    },
};

export default materiales;