const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Dorm = require('../models/dormModel.js');
const User = require('../models/usersModel.js');
const config = require('../config');

const multer = require('multer')
const upload_img = multer({ dest: './public' })
const { uploadFile, uploadPDF, uploadMultiFile } = require('../util/uploadFile.function')

const router = express.Router();

// Check if E-mail is Valid or not
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const headleError = (res, error) => {
    res.json({ error })
    return
}

const checkUserUniqueness = (field, value) => {
    return { error, isUnique } = User.findOne({ [field]: value }).exec()
        .then(user => {
            let res = {};
            if (Boolean(user)) {
                res = { error: { [field]: "This " + field + " is not available" }, isUnique: false };
            } else {
                res = { error: { [field]: "" }, isUnique: true };
            }
            return res;
        })
        .catch(err => console.log(err))
}

router.get('/userById', async (req, res) => {
    const token = req.headers.authorization || '';
    const id = jwt.decode(token).id

    User.findOne({ _id: id }).exec()
        .then((user) => {
            res.status(200).json({ user: user });
        })
        .catch(err => { console.log(err); res.status(400).json({ error: err }); })
});

let profile = upload_img.fields([{ name: 'profile', maxCount: 1 }])
router.patch('/userById', profile, async (req, res) => {
    const token = req.headers.authorization || '';
    const id = jwt.decode(token).id
    let fullpath_profile
    if (req.files) {
        fullpath_profile = uploadPDF(req.files['profile'][0], req, res)
    }
    const userEdit = req.body
    User.findOne({ _id: id }).exec()
        .then((user) => {
            user.firstname = userEdit.firstname
            user.surname = userEdit.surname
            user.profile = fullpath_profile
            user.phone = userEdit.phone
            user.save()
            res.status(200).json({ user: user });
        })
        .catch(err => { console.log(err); res.status(400).json({ error: err }); })
});

router.get('/userAll', async (req, res) => {
    // const token = req.headers.authorization || '';
    // const id = jwt.decode(token).id

    User.find({}).exec()
        .then((user) => {
            res.status(200).json({ users: user });
        })
        .catch(err => { console.log(err); res.status(400).json({ error: err }); })
});

router.post('/validate', async (req, res) => {
    const { field, value } = req.body;
    const { error, isUnique } = await checkUserUniqueness(field, value);

    if (isUnique) {
        res.json({ success: 'success' });
    } else {
        res.json({ error });
    }
});

router.post('/signup', (req, res) => {
    const firstname = req.body.firstname || '';
    const surname = req.body.surname || '';
    const email = req.body.email || '';
    const password = req.body.password || '';
    const confirmPassword = req.body.confirmPassword || '';
    const role = req.body.role || '';
    const reqBody = { firstname, surname, email, password, confirmPassword, role };

    let errors = {};
    console.log(reqBody);
    Object.keys(reqBody).forEach(async field => {
        if (reqBody[field] === '') {
            errors = { ...errors, [field]: 'This field is required' }
        }
        if (field === 'email') {
            const value = reqBody[field];
            const { error, isUnique } = await checkUserUniqueness(field, value);
            if (!isUnique) {
                // errors = { ...errors, ...error };
                headleError(res, error)
                return
            }
        }
        if (field === 'email' && !validateEmail(reqBody[field])) {
            // errors = { ...errors, [field]: 'Not a valid Email' }
            headleError(res, { [field]: 'Not a valid Email' })
            return
        }
        if (field === 'password' && password !== '' && password < 4) {
            // errors = { ...errors, [field]: 'Password too short' }
            headleError(res, { [field]: 'Password too short' })
            return
        }
        if (field === 'confirmPassword' && confirmPassword !== password) {
            // errors = { ...errors, [field]: 'Passwords do not match' }
            headleError(res, { [field]: 'Passwords do not match' })
            return
        }
    });
    const newUser = new User({
        firstname: firstname,
        surname: surname,
        email: email,
        password: password,
        role: role
    });

    // Generate the Salt
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return err;
        // Create the hashed password
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) return err;
            newUser.password = hash;
            // Save the User
            newUser.save(function (err) {
                if (err) return err
                res.json({ success: 'success' });
            });
        });
    });

});

router.post('/login', (req, res) => {
    const email = req.body.email || '';
    const password = req.body.password || '';
    console.log(req.body);
    let errors = {};

    if (email === '') {
        errors = { ...errors, email: 'This field is required' };
    }
    if (password === '') {
        errors = { ...errors, password: 'This field is required' };
    }

    if (Object.keys(errors).length > 0) {
        res.json({ errors });
    } else {
        User.findOne({ email: email }, (err, user) => {
            if (err) throw err;
            if (Boolean(user)) {
                // Match Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) return err;
                    if (isMatch) {
                        const token = jwt.sign({
                            id: user._id,
                            email: user.email
                        }, config.jwtSecret);
                        res.json({ token, success: 'success' })
                    } else {
                        res.json({ errors: { invalidCredentials: 'Invalid Email or Password' } });
                    }
                });
            } else {
                res.json({ errors: { invalidCredentials: 'Invalid Email or Password' } });
            }
        });
    }
});

module.exports = router;
