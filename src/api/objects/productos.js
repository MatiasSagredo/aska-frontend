import axios from "axios";

/** @typedef {Object} produsctos 
 * Objeto produsctos
 * @property {number} idprodusctos - ID de la produsctos
 * @property {string} nombreprodusctos - Nombre de la produsctos
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const produsctos = {
    /** @returns {Promise<Array<produsctos>>} */
    getAll: async () => {
        const response = await instance.get('/produsctos');
        return response.data;
    },
    /**
     * @param {number} id - ID de la produsctos a buscar
     * @returns {Promise<produsctos>}
     */
    getById: async (id) => {
        const response = await instance.get(`/produsctos/${id}`);
        return response.data;
    },
    /**
     * @param {produsctos} data - Datos de la produsctos a crear
     * @returns {Promise<produsctos>} */
    createprodusctos: async (data) => {
        const response = await instance.post('/produsctos', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la produsctos a actualizar
     * @param {produsctos} data - Datos de la produsctos a actualizar
     * @returns {Promise<produsctos>} 
     */
    updateprodusctosById: async (id, data) => {
        const response = await instance.put(`/produsctos/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la produsctos a actualizar
     * @param {Partial<produsctos>} data - Datos parciales de la produsctos a actualizar
     * @returns {Promise<produsctos>} */
    patchprodusctosById: async (id, data) => {
        const response = await instance.patch(`/produsctos/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la produsctos a eliminar
     * @returns {Promise<void>} */
    deleteprodusctosById: async (id) => {
        const response = await instance.delete(`/produsctos/${id}`);
        return response.data;
    },
};

export default produsctos;