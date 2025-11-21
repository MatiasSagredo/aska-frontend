import axios from "axios";

/** @typedef {Object} direcciones 
 * Objeto direcciones
 * @property {number} iddirecciones - ID de la direcciones
 * @property {string} nombredirecciones - Nombre de la direcciones
 */

let instance = axios.create({
    baseURL: 'https://aska-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const direcciones = {
    /** @returns {Promise<Array<direcciones>>} */
    getAll: async () => {
        const response = await instance.get('/direcciones');
        return response.data;
    },
    /**
     * @param {number} id - ID de la direcciones a buscar
     * @returns {Promise<direcciones>}
     */
    getById: async (id) => {
        const response = await instance.get(`/direcciones/${id}`);
        return response.data;
    },
    /**
     * @param {direcciones} data - Datos de la direcciones a crear
     * @returns {Promise<direcciones>} */
    createdirecciones: async (data) => {
        const response = await instance.post('/direcciones', data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la direcciones a actualizar
     * @param {direcciones} data - Datos de la direcciones a actualizar
     * @returns {Promise<direcciones>} 
     */
    updatedireccionesById: async (id, data) => {
        const response = await instance.put(`/direcciones/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la direcciones a actualizar
     * @param {Partial<direcciones>} data - Datos parciales de la direcciones a actualizar
     * @returns {Promise<direcciones>} */
    patchdireccionesById: async (id, data) => {
        const response = await instance.patch(`/direcciones/${id}`, data);
        return response.data;
    },
    /** 
     * @param {number} id - ID de la direcciones a eliminar
     * @returns {Promise<void>} */
    deletedireccionesById: async (id) => {
        const response = await instance.delete(`/direcciones/${id}`);
        return response.data;
    },
};

export default direcciones;