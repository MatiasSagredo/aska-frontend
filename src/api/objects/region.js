import axios from "axios";

/** @typedef {Object} region 
 * Objeto region
 * @property {number} idregion - ID de la region
 * @property {string} nombreregion - Nombre de la region
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const region = {
    /** @returns {Promise<Array<region>>} */
    getAll: async () => {
        const response = await instance.get('/region');
        return response.data;
    },
    /**
     * @param {number} id - ID de la region a buscar
     * @returns {Promise<region>}
     */
    getById: async (id) => {
        const response = await instance.get(`/region/${id}`);
        return response.data;
    },
    /**
     * @param {region} data - Datos de la region a crear
     * @returns {Promise<region>} */
    createregion: async (data) => {
        const response = await instance.post('/region', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la region a actualizar
     * @param {region} data - Datos de la region a actualizar
     * @returns {Promise<region>} 
     */
    updateregionById: async (id, data) => {
        const response = await instance.put(`/region/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la region a actualizar
     * @param {Partial<region>} data - Datos parciales de la region a actualizar
     * @returns {Promise<region>} */
    patchregionById: async (id, data) => {
        const response = await instance.patch(`/region/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la region a eliminar
     * @returns {Promise<void>} */
    deleteregionById: async (id) => {
        const response = await instance.delete(`/region/${id}`);
        return response.data;
    },
};

export default region;