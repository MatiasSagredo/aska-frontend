import axios from "axios";

/** @typedef {Object} grados 
 * Objeto grados
 * @property {number} idgrados - ID de la grados
 * @property {string} nombregrados - Nombre de la grados
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const grados = {
    /** @returns {Promise<Array<grados>>} */
    getAll: async () => {
        const response = await instance.get('/grados');
        return response.data;
    },
    /**
     * @param {number} id - ID de la grados a buscar
     * @returns {Promise<grados>}
     */
    getById: async (id) => {
        const response = await instance.get(`/grados/${id}`);
        return response.data;
    },
    /**
     * @param {grados} data - Datos de la grados a crear
     * @returns {Promise<grados>} */
    creategrados: async (data) => {
        const response = await instance.post('/grados', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la grados a actualizar
     * @param {grados} data - Datos de la grados a actualizar
     * @returns {Promise<grados>} 
     */
    updategradosById: async (id, data) => {
        const response = await instance.put(`/grados/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la grados a actualizar
     * @param {Partial<grados>} data - Datos parciales de la grados a actualizar
     * @returns {Promise<grados>} */
    patchgradosById: async (id, data) => {
        const response = await instance.patch(`/grados/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la grados a eliminar
     * @returns {Promise<void>} */
    deletegradosById: async (id) => {
        const response = await instance.delete(`/grados/${id}`);
        return response.data;
    },
};

export default grados;