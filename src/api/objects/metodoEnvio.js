import axios from "axios";

/** @typedef {Object} MetodoEnvio 
 * Objeto MetodoEnvio
 * @property {number} idMetodoEnvio - ID del MetodoEnvio
 * @property {string} nombreMetodoEnvio - Nombre del MetodoEnvio
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const MetodoEnvio = {
    /** @returns {Promise<Array<MetodoEnvio>>} */
    getAll: async () => {
        const response = await instance.get('/metodoenvio');
        return response.data;
    },
    /**
     * @param {number} id - ID del MetodoEnvio a buscar
     * @returns {Promise<MetodoEnvio>}
     */
    getById: async (id) => {
        const response = await instance.get(`/metodoenvio/${id}`);
        return response.data;
    },
    /**
     * @param {MetodoEnvio} data - Datos del MetodoEnvio a crear
     * @returns {Promise<MetodoEnvio>} */
    createMetodoEnvio: async (data) => {
        const response = await instance.post('/metodoenvio', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID del MetodoEnvio a actualizar
     * @param {MetodoEnvio} data - Datos del MetodoEnvio a actualizar
     * @returns {Promise<MetodoEnvio>} 
     */
    updateMetodoEnvioById: async (id, data) => {
        const response = await instance.put(`/metodoenvio/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID del MetodoEnvio a actualizar
     * @param {Partial<MetodoEnvio>} data - Datos parciales del MetodoEnvio a actualizar
     * @returns {Promise<MetodoEnvio>} */
    patchMetodoEnvioById: async (id, data) => {
        const response = await instance.patch(`/metodoenvio/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID del MetodoEnvio a eliminar
     * @returns {Promise<void>} */
    deleteMetodoEnvioById: async (id) => {
        const response = await instance.delete(`/metodoenvio/${id}`);
        return response.data;
    },
};

export default metodoenvio;