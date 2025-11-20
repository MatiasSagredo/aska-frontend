import axios from "axios";

/** @typedef {Object} Disiplina 
 * Objeto disiplina
 * @property {number} idDisiplina - ID de la disiplina
 * @property {string} nombreDisiplina - Nombre de la disiplina
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const disiplina = {
    /** @returns {Promise<Array<Disiplina>>} */
    getAll: async () => {
        const response = await instance.get('/disiplina');
        return response.data;
    },
    /**
     * @param {number} id - ID de la disiplina a buscar
     * @returns {Promise<Disiplina>}
     */
    getById: async (id) => {
        const response = await instance.get(`/disiplina/${id}`);
        return response.data;
    },
    /**
     * @param {Disiplina} data - Datos de la disiplina a crear
     * @returns {Promise<Disiplina>} */
    createDisiplina: async (data) => {
        const response = await instance.post('/disiplina', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la disiplina a actualizar
     * @param {Disiplina} data - Datos de la disiplina a actualizar
     * @returns {Promise<Disiplina>} 
     */
    updateDisiplinaById: async (id, data) => {
        const response = await instance.put(`/disiplina/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la disiplina a actualizar
     * @param {Partial<Disiplina>} data - Datos parciales de la disiplina a actualizar
     * @returns {Promise<Disiplina>} */
    patchDisiplinaById: async (id, data) => {
        const response = await instance.patch(`/disiplina/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la disiplina a eliminar
     * @returns {Promise<void>} */
    deleteDisiplinaById: async (id) => {
        const response = await instance.delete(`/disiplina/${id}`);
        return response.data;
    },
};

export default disiplina;