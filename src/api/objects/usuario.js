import axios from "axios";

<<<<<<< HEAD
/** @typedef {Object} Usuario 
 * Objeto Usuario
 * @property {number} idUsuario - ID del Usuario
 * @property {string} nombreUsuario - Nombre del Usuario
=======
/** @typedef {Object} usuario 
 * Objeto usuario
 * @property {number} idusuario - ID de la usuario
 * @property {string} nombreusuario - Nombre de la usuario
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

<<<<<<< HEAD
const Usuario = {
    /** @returns {Promise<Array<Usuario>>} */
=======
const usuario = {
    /** @returns {Promise<Array<usuario>>} */
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
    getAll: async () => {
        const response = await instance.get('/usuario');
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {number} id - ID del Usuario a buscar
     * @returns {Promise<Usuario>}
=======
     * @param {number} id - ID de la usuario a buscar
     * @returns {Promise<usuario>}
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
     */
    getById: async (id) => {
        const response = await instance.get(`/usuario/${id}`);
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {Usuario} data - Datos del Usuario a crear
     * @returns {Promise<Usuario>} */
    createUsuario: async (data) => {
=======
     * @param {usuario} data - Datos de la usuario a crear
     * @returns {Promise<usuario>} */
    createusuario: async (data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.post('/usuario', data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID del Usuario a actualizar
     * @param {Usuario} data - Datos del Usuario a actualizar
     * @returns {Promise<Usuario>} 
     */
    updateUsuarioById: async (id, data) => {
=======
     * @param {number} id - ID de la usuario a actualizar
     * @param {usuario} data - Datos de la usuario a actualizar
     * @returns {Promise<usuario>} 
     */
    updateusuarioById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.put(`/usuario/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID del Usuario a actualizar
     * @param {Partial<Usuario>} data - Datos parciales del Usuario a actualizar
     * @returns {Promise<Usuario>} */
    patchUsuarioById: async (id, data) => {
=======
     * @param {number} id - ID de la usuario a actualizar
     * @param {Partial<usuario>} data - Datos parciales de la usuario a actualizar
     * @returns {Promise<usuario>} */
    patchusuarioById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.patch(`/usuario/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID del Usuario a eliminar
     * @returns {Promise<void>} */
    deleteUsuarioById: async (id) => {
=======
     * @param {number} id - ID de la usuario a eliminar
     * @returns {Promise<void>} */
    deleteusuarioById: async (id) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.delete(`/usuario/${id}`);
        return response.data;
    },
};

export default usuario;