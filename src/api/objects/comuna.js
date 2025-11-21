import axios from "axios";

/** @typedef {Object} comuna 
 * Objeto comuna
 * @property {number} idcomuna - ID de la comuna
 * @property {string} nombrecomuna - Nombre de la comuna
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const comuna = {
    /** @returns {Promise<Array<comuna>>} */
    getAll: async () => {
        const response = await instance.get('/comuna');
        return response.data;
    },
    /**
     * @param {number} id - ID de la comuna a buscar
     * @returns {Promise<comuna>}
     */
    getById: async (id) => {
        const response = await instance.get(`/comuna/${id}`);
        return response.data;
    },
    /**
     * @param {comuna} data - Datos de la comuna a crear
     * @returns {Promise<comuna>} */
    createcomuna: async (data) => {
        const response = await instance.post('/comuna', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la comuna a actualizar
     * @param {comuna} data - Datos de la comuna a actualizar
     * @returns {Promise<comuna>} 
     */
    updatecomunaById: async (id, data) => {
        const response = await instance.put(`/comuna/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la comuna a actualizar
     * @param {Partial<comuna>} data - Datos parciales de la comuna a actualizar
     * @returns {Promise<comuna>} */
    patchcomunaById: async (id, data) => {
        const response = await instance.patch(`/comuna/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la comuna a eliminar
     * @returns {Promise<void>} */
    deletecomunaById: async (id) => {
        const response = await instance.delete(`/comuna/${id}`);
        return response.data;
    },
};

export default comuna;