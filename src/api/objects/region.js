import axios from "axios";

<<<<<<< HEAD
/** @typedef {Object} Region 
 * Objeto Region
 * @property {number} idRegion - ID de la Region
 * @property {string} nombreRegion- Nombre de la Region
=======
/** @typedef {Object} region 
 * Objeto region
 * @property {number} idregion - ID de la region
 * @property {string} nombreregion - Nombre de la region
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

<<<<<<< HEAD
const Region= {
    /** @returns {Promise<Array<Region>>} */
=======
const region = {
    /** @returns {Promise<Array<region>>} */
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
    getAll: async () => {
        const response = await instance.get('/region');
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {number} id - ID de la Region a buscar
     * @returns {Promise<Region>}
=======
     * @param {number} id - ID de la region a buscar
     * @returns {Promise<region>}
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
     */
    getById: async (id) => {
        const response = await instance.get(`/region/${id}`);
        return response.data;
    },
    /**
<<<<<<< HEAD
     * @param {Region} data - Datos de la Region a crear
     * @returns {Promise<Region>} */
    createRegion: async (data) => {
=======
     * @param {region} data - Datos de la region a crear
     * @returns {Promise<region>} */
    createregion: async (data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.post('/region', data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID de la Region a actualizar
     * @param {Region} data - Datos de la Region a actualizar
     * @returns {Promise<Region>} 
     */
    updateRegionById: async (id, data) => {
=======
     * @param {number} id - ID de la region a actualizar
     * @param {region} data - Datos de la region a actualizar
     * @returns {Promise<region>} 
     */
    updateregionById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.put(`/region/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID de la Region a actualizar
     * @param {Partial<Region>} data - Datos parciales de la Region a actualizar
     * @returns {Promise<Region>} */
    patchRegionById: async (id, data) => {
=======
     * @param {number} id - ID de la region a actualizar
     * @param {Partial<region>} data - Datos parciales de la region a actualizar
     * @returns {Promise<region>} */
    patchregionById: async (id, data) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.patch(`/region/${id}`, data);
        return response.data;
    },
    /** 
<<<<<<< HEAD
     * @param {number} id - ID de la Region a eliminar
     * @returns {Promise<void>} */
    deleteRegionById: async (id) => {
=======
     * @param {number} id - ID de la region a eliminar
     * @returns {Promise<void>} */
    deleteregionById: async (id) => {
>>>>>>> ae9db34d0cb454b5c376137ffe78b2e684f65726
        const response = await instance.delete(`/region/${id}`);
        return response.data;
    },
};

export default region;