import axios from "axios";

<<<<<<< HEAD
/** @typedef {Object} Estado 
 * Objeto Estado
 * @property {number} idEstado - ID del Estado
 * @property {string} nombreEstado - Nombre del Estado
=======
/** @typedef {Object} estado 
 * Objeto estado
 * @property {number} idestado - ID de la estado
 * @property {string} nombreestado - Nombre de la estado
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

<<<<<<< HEAD
const Estado = {
    /** @returns {Promise<Array<Estado>>} */
=======
const estado = {
    /** @returns {Promise<Array<estado>>} */
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
    getAll: async () => {
        const response = await instance.get('/estado');
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {number} id - ID del Estado a buscar
     * @returns {Promise<Estado>}
=======
     * @param {number} id - ID de la estado a buscar
     * @returns {Promise<estado>}
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
     */
    getById: async (id) => {
        const response = await instance.get(`/estado/${id}`);
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {Estado} data - Datos del Estado a crear
     * @returns {Promise<Estado>} */
    createEstado: async (data) => {
=======
     * @param {estado} data - Datos de la estado a crear
     * @returns {Promise<estado>} */
    createestado: async (data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.post('/estado', data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID del Estado a actualizar
     * @param {Estado} data - Datos del Estado a actualizar
     * @returns {Promise<Estado>} 
     */
    updateEstadoById: async (id, data) => {
=======
     * @param {number} id - ID de la estado a actualizar
     * @param {estado} data - Datos de la estado a actualizar
     * @returns {Promise<estado>} 
     */
    updateestadoById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.put(`/estado/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID del Estado a actualizar
     * @param {Partial<Estado>} data - Datos parciales del Estado a actualizar
     * @returns {Promise<Estado>} */
    patchEstadoById: async (id, data) => {
=======
     * @param {number} id - ID de la estado a actualizar
     * @param {Partial<estado>} data - Datos parciales de la estado a actualizar
     * @returns {Promise<estado>} */
    patchestadoById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.patch(`/estado/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID del Estado a eliminar
     * @returns {Promise<void>} */
    deleteEstadoById: async (id) => {
=======
     * @param {number} id - ID de la estado a eliminar
     * @returns {Promise<void>} */
    deleteestadoById: async (id) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.delete(`/estado/${id}`);
        return response.data;
    },
};

export default estado;