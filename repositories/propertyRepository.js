const Property = require('../models/property');


exports.addProperty = (obj) => {
    const property = new Property(obj);
    try {
        const data = property.save();
        return data;
    }
    catch (err) {
        return err
    }

}

exports.addAllProperties = async (obj) => {
    const data = await Property.insertMany(obj);
    return data;
}

exports.getAllProperties = async () => {
    try {
        const data = await Property.find();
        return data;
    }
    catch (err) {
        return err
    }

}

exports.updateProperty = async (id, body) => {
    try {
        const data = await Property.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
        return data;
    }
    catch (err) {
        return err
    }

}

exports.getPropertyById = async (id) => {
    try {
        const data = await Property.findById(id);
        return data;
    }
    catch (err) {
        return err
    }

}
