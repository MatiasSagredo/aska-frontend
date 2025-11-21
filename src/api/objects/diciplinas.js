import axios from "axios";

/** @typedef {Object} diciplinas 
 * Objeto diciplinas
 * @property {number} iddiciplinas - ID de la diciplinas
 * @property {string} nombrediciplinas - Nombre de la diciplinas
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const diciplinas = {
    /** @returns {Promise<Array<diciplinas>>} */
    getAll: async () => {
        const response = await instance.get('/diciplinas');
        return response.data;
    },
    /**
     * @param {number} id - ID de la diciplinas a buscar
     * @returns {Promise<diciplinas>}
     */
    getById: async (id) => {
        const response = await instance.get(`/diciplinas/${id}`);
        return response.data;
    },
    /**
     * @param {diciplinas} data - Datos de la diciplinas a crear
     * @returns {Promise<diciplinas>} */
    creatediciplinas: async (data) => {
        const response = await instance.post('/diciplinas', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la diciplinas a actualizar
     * @param {diciplinas} data - Datos de la diciplinas a actualizar
     * @returns {Promise<diciplinas>} 
     */
    updatediciplinasById: async (id, data) => {
        const response = await instance.put(`/diciplinas/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la diciplinas a actualizar
     * @param {Partial<diciplinas>} data - Datos parciales de la diciplinas a actualizar
     * @returns {Promise<diciplinas>} */
    patchdiciplinasById: async (id, data) => {
        const response = await instance.patch(`/diciplinas/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la diciplinas a eliminar
     * @returns {Promise<void>} */
    deletediciplinasById: async (id) => {
        const response = await instance.delete(`/diciplinas/${id}`);
        return response.data;
    },
};

export default diciplinas;