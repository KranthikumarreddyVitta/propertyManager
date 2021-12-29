const Manager = require('../models/manager');


exports.addManager = async (obj) => {
    try {
        const manger = new Manager({...obj})
        const data = await manger.save();
        return data;
    }
    catch (err) {
        return err
    }

}