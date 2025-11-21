import axios from "axios";

/** @typedef {Object} venta 
 * Objeto venta
 * @property {number} idventa - ID de la venta
 * @property {string} nombreventa - Nombre de la venta
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const venta = {
    /** @returns {Promise<Array<venta>>} */
    getAll: async () => {
        const response = await instance.get('/venta');
        return response.data;
    },
    /**
     * @param {number} id - ID de la venta a buscar
     * @returns {Promise<venta>}
     */
    getById: async (id) => {
        const response = await instance.get(`/venta/${id}`);
        return response.data;
    },
    /**
     * @param {venta} data - Datos de la venta a crear
     * @returns {Promise<venta>} */
    createventa: async (data) => {
        const response = await instance.post('/venta', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la venta a actualizar
     * @param {venta} data - Datos de la venta a actualizar
     * @returns {Promise<venta>} 
     */
    updateventaById: async (id, data) => {
        const response = await instance.put(`/venta/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la venta a actualizar
     * @param {Partial<venta>} data - Datos parciales de la venta a actualizar
     * @returns {Promise<venta>} */
    patchventaById: async (id, data) => {
        const response = await instance.patch(`/venta/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la venta a eliminar
     * @returns {Promise<void>} */
    deleteventaById: async (id) => {
        const response = await instance.delete(`/venta/${id}`);
        return response.data;
    },
};

export default venta;