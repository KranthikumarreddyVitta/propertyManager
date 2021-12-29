const mongoose = require('mongoose');
 
const propertySchema = new mongoose.Schema({
    name : {
        type:String,
        required: [true, 'Please enter property name!']
    },
    address : {
        type:String,
        required: [true, 'Please enter property address!']
    },
    city : {
        type:String,
        required: [true, 'Please enter property city!']
    },
    cityId : {
        type:Number,
        required: [true, 'Please enter property cityId!']
    },
    postalCode : {
        type:String,
        required: [true, 'Please enter property postalCode!']
    },
    country : {
        type:String,
        required: [true, 'Please enter property country!']
    },
    propertyStateCode : {
        type:String,
        required: [true, 'Please enter property propertyStateCode!']
    },
    propertyStateName : {
        type:String,
        required: [true, 'Please enter property propertyStateName!']
    },
    stateSgid : {
        type:Number,
        required: [true, 'Please enter property stateSgid!']
    },
    stateTrendSgid : {
        type:Number,
        required: [true, 'Please enter property stateTrendSgid!']
    },
    propertyStateSgid : {
        type:Number,
        required: [true, 'Please enter property propertyStateSgid!']
    },
    propertyStateTrendSgid : {
        type:Number,
        required: [true, 'Please enter property propertyStateTrendSgid!']
    },
    updatedDate: {
        type: Date,
        default: Date.now(),
        select: false
    },
    balanceAmount : {
        type:Number,
        default:0
    }

})

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;