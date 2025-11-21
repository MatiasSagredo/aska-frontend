import axios from "axios";

<<<<<<< HEAD
/** @typedef {Object} Direcciones 
 * Objeto Direcciones
 * @property {number} idDirecciones - ID de las Direcciones
 * @property {string} nombreDirecciones - Nombre de las Direcciones
=======
/** @typedef {Object} direcciones 
 * Objeto direcciones
 * @property {number} iddirecciones - ID de la direcciones
 * @property {string} nombredirecciones - Nombre de la direcciones
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

<<<<<<< HEAD
const Direcciones = {
    /** @returns {Promise<Array<Direcciones>>} */
=======
const direcciones = {
    /** @returns {Promise<Array<direcciones>>} */
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
    getAll: async () => {
        const response = await instance.get('/direcciones');
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {number} id - ID de las Direcciones a buscar
     * @returns {Promise<Direcciones>}
=======
     * @param {number} id - ID de la direcciones a buscar
     * @returns {Promise<direcciones>}
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
     */
    getById: async (id) => {
        const response = await instance.get(`/direcciones/${id}`);
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {Direcciones} data - Datos de las Direcciones a crear
     * @returns {Promise<Direcciones>} */
    createDirecciones: async (data) => {
=======
     * @param {direcciones} data - Datos de la direcciones a crear
     * @returns {Promise<direcciones>} */
    createdirecciones: async (data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.post('/direcciones', data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID de las Direcciones a actualizar
     * @param {Direcciones} data - Datos de las Direcciones a actualizar
     * @returns {Promise<Direcciones>} 
     */
    updateDireccionesById: async (id, data) => {
=======
     * @param {number} id - ID de la direcciones a actualizar
     * @param {direcciones} data - Datos de la direcciones a actualizar
     * @returns {Promise<direcciones>} 
     */
    updatedireccionesById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.put(`/direcciones/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID de la Direcciones a actualizar
     * @param {Partial<Direcciones>} data - Datos parciales de las Direcciones a actualizar
     * @returns {Promise<Direcciones>} */
    patchDireccionesById: async (id, data) => {
=======
     * @param {number} id - ID de la direcciones a actualizar
     * @param {Partial<direcciones>} data - Datos parciales de la direcciones a actualizar
     * @returns {Promise<direcciones>} */
    patchdireccionesById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.patch(`/direcciones/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID de las Direcciones a eliminar
     * @returns {Promise<void>} */
    deleteDireccionesById: async (id) => {
=======
     * @param {number} id - ID de la direcciones a eliminar
     * @returns {Promise<void>} */
    deletedireccionesById: async (id) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.delete(`/direcciones/${id}`);
        return response.data;
    },
};

<<<<<<< HEAD
export default Direcciones;
=======
export default direcciones;
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
