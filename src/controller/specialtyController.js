import specialtyService from '../services/specialtyService';

let createSpecialty = async (req, res) => {
    try {
        let infor = await specialtyService.createSpecialty(req.body);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            Message: 'get all doctor fail error form server...',
        });
    }
};
let getAllSpecialties = async (req, res) => {
    try {
        let infor = await specialtyService.getAllSpecialties();
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            Message: 'get all doctor fail error form server...',
        });
    }
};
let getDeatilSpecialtyById = async (req, res) => {
    try {
        let infor = await specialtyService.getDeatilSpecialtyById(req.query.id, req.query.location);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            Message: 'get Deatil Specialty By Id fail error form server...',
        });
    }
};

module.exports = {
    createSpecialty: createSpecialty,
    getAllSpecialties: getAllSpecialties,
    getDeatilSpecialtyById: getDeatilSpecialtyById,
};
