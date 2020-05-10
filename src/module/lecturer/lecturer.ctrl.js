const HttpStatus = require('http-status-codes');
const lecturerService = require('../../services/lecturer-service');

/**
 * 
 * @param {*} args 
 */
const createOne = async (args) => {
    try {
        const document = await lecturerService.createOne(args.input);
        return document;
    } catch (e) {
        throw e;
    }
};

/**
 * 
 * @param {*} param0 
 */
const updateOne = async ({ _id, input }) => {
    try {
        const result = await lecturerService.updateOne({ _id }, input);
        return (result.nModified === 1) ? { code: 1000 , msg: 'success' } : { code: 1001 , msg: 'failure' };
    } catch (e) {
        throw e;
    }
};

/**
 * 
 * @param {*} args 
 */
const findOne = async (args) => {
    try {
        const document = await lecturerService.findOne(args.input);
        return document || {};
    } catch (e) {
        throw e;
    }
};


/**
 * 
 * @param {*} args 
 */
const find = async (args) => {
    try {
        const document = await lecturerService.find(args.input);
        return document || {};
    } catch (e) {
        throw e;
    }
};

/**
 * 
 * @param {*} param0 
 */
const deleteOne = async ({ _id }) => {
    try {
        const result = await lecturerService.deleteOne({ _id });
        return (result.n === 1 && result.ok === 1) ? { code: 1000 , msg: 'success' } : { code: 1001 , msg: 'failure' };
    } catch (e) {
        throw e;
    }
};

module.exports = { findOne, find, createOne, updateOne, deleteOne };

