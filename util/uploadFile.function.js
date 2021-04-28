const path = require("path");
const fs = require("fs");
const handleError = (err, res) => {
    res.status(500).send(err)
    return;
};

exports.uploadFile = (req) => {
    // upload file
    let tempPath = req.file.path;
    let targetPath = path.join(tempPath);

    if (req.file.mimetype === "image/png") {
        targetPath = targetPath + '.png';
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("File uploaded!")
            // res.status(200).contentType("text/plain").end("File uploaded!");
        });
    } else if (req.file.mimetype === "image/jpeg") {
        targetPath = targetPath + '.jpg';
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("File uploaded!")
            // res.status(200).contentType("text/plain").end("File uploaded!");
        });
    } else {
        fs.unlink(tempPath, err => {
            if (err) return handleError(err, res);

            res.status(403).contentType("text/plain").end("Only .png or .jpeg files are allowed!");
            return
        });
    }

    return path.join(__dirname, '../../', targetPath);
}

exports.uploadPDF = (req, res) => {
    // upload file
    let tempPath = req.path;
    let targetPath = path.join(tempPath);

    if (req.mimetype === "image/png") {
        targetPath = targetPath + '.png';
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("File uploaded!")
            // res.status(200).send("File uploaded!");
        });
    } else if (req.mimetype === "image/jpeg") {
        targetPath = targetPath + '.jpg';
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("File uploaded!")
            // res.status(200).send("File uploaded!");
        });
    } else if (req.mimetype === "application/pdf") {
        targetPath = targetPath + '.pdf';
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("File uploaded!")
            // res.status(200).send("File uploaded!");
        });
    } else {
        fs.unlink(tempPath, err => {
            if (err) return handleError(err, res);
            res.status(403).send("Only .png / .jpeg / .pdf files are allowed!");
            return
        });
    }

    return path.join(targetPath.replace('public\\',''));
}
