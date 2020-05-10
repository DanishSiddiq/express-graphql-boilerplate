const mongoose = require('mongoose');
const mongooseValidator = require('express-api-problem/mongoose-validator');

const lecturerSchema = new mongoose.Schema(
    {
            firstName: {
                    type: String,
                    trim: true
            },
            lastName: {
                    type: String,
                    trim: true
            },
            email: {
                    type: String,
                    required: true,
                    unique: true,
                    trim: true
            },
            serviceNumber: {
                    type: Number,
                    required: true
            },
            isEnabled: {
                    type: Boolean,
            }
    },
    {
            strict: false,
            versionKey: false,
            bufferCommands: false,
            validateBeforeSave: true,
            timestamps: true,
    },
);

lecturerSchema.plugin(mongooseValidator);

module.exports = mongoose.model('lecturer', lecturerSchema, 'lecturers');
