import axios from "axios";

/** @typedef {Object} estado 
 * Objeto estado
 * @property {number} idestado - ID de la estado
 * @property {string} nombreestado - Nombre de la estado
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const estado = {
    /** @returns {Promise<Array<estado>>} */
    getAll: async () => {
        const response = await instance.get('/estado');
        return response.data;
    },
    /**
     * @param {number} id - ID de la estado a buscar
     * @returns {Promise<estado>}
     */
    getById: async (id) => {
        const response = await instance.get(`/estado/${id}`);
        return response.data;
    },
    /**
     * @param {estado} data - Datos de la estado a crear
     * @returns {Promise<estado>} */
    createestado: async (data) => {
        const response = await instance.post('/estado', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la estado a actualizar
     * @param {estado} data - Datos de la estado a actualizar
     * @returns {Promise<estado>} 
     */
    updateestadoById: async (id, data) => {
        const response = await instance.put(`/estado/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la estado a actualizar
     * @param {Partial<estado>} data - Datos parciales de la estado a actualizar
     * @returns {Promise<estado>} */
    patchestadoById: async (id, data) => {
        const response = await instance.patch(`/estado/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la estado a eliminar
     * @returns {Promise<void>} */
    deleteestadoById: async (id) => {
        const response = await instance.delete(`/estado/${id}`);
        return response.data;
    },
};

export default estado;