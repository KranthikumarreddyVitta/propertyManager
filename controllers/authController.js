const managerRepository = require('../repositories/mangerRepository');

exports.signUp = function (req, res) {
    try {
        const user = managerRepository.addManager(req.body);
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