const propertyRepository = require('../repositories/propertyRepository');


exports.addProperty = async (req, res) => {
    const obj = req.body;
    try {
        const propertyData = await propertyRepository.addProperty(obj);
        res.status(200).json({
            message: "success",
            data: propertyData
        })
    }
    catch (err) {
        res.status(400).json({
            message: "failed",
            error: err
        })
    }
}

exports.addAllProperty = async (req, res) => {
    const obj = req.body;
    try {
        const propertyData = await propertyRepository.addAllProperties(obj);
        res.status(200).json({
            message: "success",
            data: propertyData
        })
    }
    catch (err) {
        res.status(400).json({
            message: "failed",
            error: err
        })
    }
}

exports.getAllProperty = async (req, res) => {
    try {
        const propertyData = await propertyRepository.getAllProperties();
        res.status(200).json({
            message: "success",
            data: propertyData
        })
    }
    catch (err) {
        res.status(400).json({
            message: "failed",
            error: err
        })
    }

}

exports.updateProperty = async (req, res) => {
    try {
        const propertyData = await propertyRepository.updateProperty(req.params.id, req.body);
        res.status(200).json({
            message: "success",
            data: propertyData
        })
    }
    catch (err) {
        res.status(400).json({
            message: "failed",
            error: err
        })
    }
}

exports.getPropertyById = async (req, res) => {
    try {
        const propertyData = await propertyRepository.getPropertyById(req.params.id);
        res.status(200).json({
            message: "success",
            data: propertyData
        })
    }
    catch (err) {
        res.status(400).json({
            message: "failed",
            error: err
        })
    }
}