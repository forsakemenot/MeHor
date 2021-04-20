const express = require('express');
const jwt = require('jsonwebtoken');
const Dorm = require('../models/dormModel.js');
const router = express.Router();

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
        dorm_name, dorm_name_eng, dorm_type, dorm_zone, dorm_others,dorm_address, latitude,
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

module.exports = router;