const mongoose = require('mongoose');
const validator = require('validator');
const propertyRepository = require('../repositories/propertyRepository');

const managerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter manager first name!']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter manager last name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords are not the same!'
        }
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    propertyData: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Property'
        }
    ]
});

managerSchema.pre('save', function (next) {console.log("insice")
  const propertyData1 = this.propertyData.map(async data => await Property.findById(data)) 
  
  next()
})

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;