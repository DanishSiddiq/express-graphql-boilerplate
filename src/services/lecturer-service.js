const lecturerModel  = require('../models/lecturer-model');
const Repository    = require('../models/data-access/repository');

/**
 *
 * @param data
 * @returns {Promise<document>}
 */
const createOne = async (data) => {
    const repository    = new Repository(lecturerModel);
    return repository.createOne(data);
};

/**
 *
 * @param whereClause
 * @param data
 * @returns {Promise<Query|*>}
 */
const updateOne = async (whereClause, data) => {
    const repository    = new Repository(lecturerModel);
    return repository.updateOne(whereClause, data);
};

/**
 *
 * @param whereClause
 * @param projection
 * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
 */
const findOne = async (whereClause, projection = {}) => {
    const repository    = new Repository(lecturerModel);
    return repository.findOne(whereClause, projection);
};

/**
 *
 * @param whereClause
 * @param projection
 * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
 */
const find = async (whereClause, projection = {}) => {
    const repository    = new Repository(lecturerModel);
    return repository.fin
    d(whereClause, projection);
};

/**
 *
 * @param whereClause
 * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
 */
const deleteOne = async (whereClause) => {
    const repository    = new Repository(lecturerModel);
    return repository.deleteOne(whereClause);
};

module.exports = { createOne, updateOne, findOne, find, deleteOne };


