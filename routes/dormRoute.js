const express = require('express');
const jwt = require('jsonwebtoken');
const Dorm = require('../models/dormModel.js');
const DormType = require('../models/dormTypeModel.js');
const DormFacility = require('../models/dormFacilityModel')
const dormDocument = require('../models/documentModel')

const router = express.Router();
const multer = require('multer')
const upload_img = multer({ dest: './public' })
const { uploadFile, uploadPDF } = require('../util/uploadFile.function')

router.get('/dorm', (req, res) => {
    const token = req.headers.authorization || '';
    const email = jwt.decode(token).email
    console.log(jwt.decode(token).email);
    Dorm.findOne({ user: email }).exec()
        .then(dorm => {
            console.log(dorm);
            res.status(200).json({ dorm: dorm });
        })
        .catch(err => { console.log(err); res.status(400).json({ error: err }); })

})
router.post('/adddorm', (req, res) => {
    const dorm_name = req.body.dorm_name || '';
    const dorm_name_eng = req.body.dorm_name_eng || '';
    const dorm_type = req.body.dorm_type || '';
    const dorm_zone = req.body.dorm_zone || '';
    const dorm_others = req.body.dorm_others || '';
    const dorm_address = req.body.dorm_address || '';
    const latitude = req.body.latitude || '';
    const longtitude = req.body.longtitude || '';
    const description = req.body.description || '';
    const owner_name = req.body.owner_name || '';
    const owner_phone = req.body.owner_phone || '';
    const owner_office_name = req.body.owner_office_name || '';
    const owner_line = req.body.owner_line || '';
    const owner_facebook = req.body.owner_facebook || '';
    const token = req.headers.authorization || '';
    const reqBody = {
        dorm_name, dorm_name_eng, dorm_type, dorm_zone, dorm_others, dorm_address, latitude,
        longtitude, description, owner_name, owner_phone, owner_office_name, owner_line, owner_facebook,
        token
    };

    let errors = {};
    console.log(reqBody);

    if (Object.keys(errors).length > 0) {
        console.log('errors');
        res.json({ errors });
    } else {
        const newDorm = new Dorm({
            dorm_name: dorm_name,
            dorm_name_eng: dorm_name_eng,
            dorm_type: dorm_type,
            dorm_zone: dorm_zone,
            dorm_others: dorm_others,
            dorm_address: dorm_address,
            latitude: latitude,
            longtitude: longtitude,
            description: description,
            owner_name: owner_name,
            owner_phone: owner_phone,
            owner_office_name: owner_office_name,
            owner_line: owner_line,
            owner_facebook: owner_facebook,
            user: jwt.decode(token).email
        });
        newDorm.save(function (err) {
            if (err) {
                console.log(err.message);
                res.status(500).json({ error: err.message });
                return err
            }
            res.json({ success: 'success' });
        });
    }
});

router.post('/dormtype', (req, res) => {

    const dorm_id = req.body.dorm_id || '';
    const dormtype = req.body.dorm_type || '';
    const insurance_bill = req.body.insurance_bill || '';
    const pre_paid = req.body.pre_paid || '';
    const electric_bill = req.body.electric_bill || '';
    const water_bill = req.body.water_bill || '';
    const internet_bill = req.body.internet_bill || '';
    const keycard = req.body.keycard || '';

    const token = req.headers.authorization || '';
    const reqBody = {
        dorm_id, dormtype, insurance_bill, pre_paid, electric_bill, water_bill, internet_bill, keycard
    };

    let errors = {};
    console.log(reqBody);

    if (Object.keys(errors).length > 0) {
        console.log('errors');
        res.json({ errors });
    } else {

        const newDormType = new DormType(reqBody);
        newDormType.save(function (err) {
            if (err) {
                console.log(err.message);
                res.status(500).json({ error: err.message });
                return err
            }
            res.json({ success: 'success' });
        });

    }
});

router.post('/dormfacility', upload_img.any('img'), (req, res) => {
    console.log(req.file);
    let fullpath
    if (req.file) {
        fullpath = uploadFile(req)
    }
    const dorm_id = req.body.dorm_id || '';
    const dorm_facilities = req.body.dorm_facilities || '';
    const img = fullpath
    const token = req.headers.authorization || '';
    const reqBody = {
        dorm_id, dorm_facilities, img, token
    };

    let errors = {};
    console.log(reqBody);

    if (Object.keys(errors).length > 0) {
        console.log('errors');
        res.json({ errors });
    } else {

        const newDormFacility = new DormFacility(reqBody);
        newDormFacility.save(function (err) {
            if (err) {
                console.log(err.message);
                res.status(500).json({ error: err.message });
                return err
            }
        })
        res.json({
            success: 'success',
            data: newDormFacility
        });
    }
});

let cpUpload = upload_img.fields([{ name: 'regis_pic', maxCount: 1 }, { name: 'location_pic', maxCount: 8 }])
router.post('/dormDocument', cpUpload, (req, res) => {

    let fullpath_regis, fullpath_location
    console.log(req.files['regis_pic'][0]);
    if (req.files) {
        fullpath_regis = uploadPDF(req.files['regis_pic'][0], res)
        fullpath_location = uploadPDF(req.files['location_pic'][0], res)
    }
    

    const dorm_id = req.body.dorm_id || '';
    const regis_pic = fullpath_regis;
    const location_pic = fullpath_location;
    const token = req.headers.authorization || '';
    const reqBody = {
        dorm_id, regis_pic, location_pic, token
    };

    let errors = {};
    console.log(reqBody);

    if (Object.keys(errors).length > 0) {
        console.log('errors');
        res.json({ errors });
    } else {

        const newDormDocument = new dormDocument(reqBody);
        newDormDocument.save(function (err) {
            if (err) {
                console.log(err.message);
                res.status(500).json({ error: err.message });
                return err
            }
            res.status(200).send("success")
        })
    }
});
module.exports = router;