import axios from "axios";

<<<<<<< HEAD
/** @typedef {Object} Venta 
 * Objeto Venta
 * @property {number} idVenta - ID de la Venta
 * @property {string} nombreVenta - Nombre de la Venta
=======
/** @typedef {Object} venta 
 * Objeto venta
 * @property {number} idventa - ID de la venta
 * @property {string} nombreventa - Nombre de la venta
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

<<<<<<< HEAD
const Venta = {
    /** @returns {Promise<Array<Venta>>} */
=======
const venta = {
    /** @returns {Promise<Array<venta>>} */
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
    getAll: async () => {
        const response = await instance.get('/venta');
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {number} id - ID de la Venta a buscar
     * @returns {Promise<Venta>}
=======
     * @param {number} id - ID de la venta a buscar
     * @returns {Promise<venta>}
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
     */
    getById: async (id) => {
        const response = await instance.get(`/venta/${id}`);
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {Venta} data - Datos de la Venta a crear
     * @returns {Promise<Venta>} */
    createVenta: async (data) => {
=======
     * @param {venta} data - Datos de la venta a crear
     * @returns {Promise<venta>} */
    createventa: async (data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.post('/venta', data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID de la Venta a actualizar
     * @param {Venta} data - Datos de la Venta a actualizar
     * @returns {Promise<Venta>} 
     */
    updateVentaById: async (id, data) => {
=======
     * @param {number} id - ID de la venta a actualizar
     * @param {venta} data - Datos de la venta a actualizar
     * @returns {Promise<venta>} 
     */
    updateventaById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.put(`/venta/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID de la Venta a actualizar
     * @param {Partial<Venta>} data - Datos parciales de la Venta a actualizar
     * @returns {Promise<Venta>} */
    patchVentaById: async (id, data) => {
=======
     * @param {number} id - ID de la venta a actualizar
     * @param {Partial<venta>} data - Datos parciales de la venta a actualizar
     * @returns {Promise<venta>} */
    patchventaById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.patch(`/venta/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID de la Venta a eliminar
     * @returns {Promise<void>} */
    deleteVentaById: async (id) => {
=======
     * @param {number} id - ID de la venta a eliminar
     * @returns {Promise<void>} */
    deleteventaById: async (id) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.delete(`/venta/${id}`);
        return response.data;
    },
};

<<<<<<< HEAD
export default Venta;
=======
export default venta;
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
