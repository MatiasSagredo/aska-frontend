import axios from "axios";

/** @typedef {Object} MetodoPago 
 * Objeto MetodoPago
 * @property {number} idMetodoPago - ID del MetodoPago
 * @property {string} nombreMetodoPago - Nombre del MetodoPago
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const MetodoPago = {
    /** @returns {Promise<Array<MetodoPago>>} */
    getAll: async () => {
        const response = await instance.get('/metodopago');
        return response.data;
    },
    /**
     * @param {number} id - ID del MetodoPago a buscar
     * @returns {Promise<MetodoPago>}
     */
    getById: async (id) => {
        const response = await instance.get(`/metodopago/${id}`);
        return response.data;
    },
    /**
     * @param {MetodoPago} data - Datos del MetodoPago a crear
     * @returns {Promise<MetodoPago>} */
    createMetodoPago: async (data) => {
        const response = await instance.post('/metodopago', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID del MetodoPago a actualizar
     * @param {MetodoPago} data - Datos del MetodoPago a actualizar
     * @returns {Promise<MetodoPago>} 
     */
    updateMetodoPagoById: async (id, data) => {
        const response = await instance.put(`/metodopago/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID del MetodoPago a actualizar
     * @param {Partial<MetodoPago>} data - Datos parciales del MetodoPago a actualizar
     * @returns {Promise<MetodoPago>} */
    patchMetodoPagoById: async (id, data) => {
        const response = await instance.patch(`/metodopago/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID del MetodoPago a eliminar
     * @returns {Promise<void>} */
    deleteMetodoPagoById: async (id) => {
        const response = await instance.delete(`/metodopago/${id}`);
        return response.data;
    },
};

export default metodopago;