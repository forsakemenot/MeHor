const path = require("path");
const fs = require("fs");
const handleError = (err, res) => {
    res.status(500).send(err)
    return;
};

exports.uploadFile = (file, req, res) => {
    // upload file
    let tempPath = file.file.path;
    let targetPath = path.join(tempPath);

    if (file.file.mimetype === "image/png") {
        targetPath = targetPath + '.png';
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("File uploaded!")
            // res.status(200).contentType("text/plain").end("File uploaded!");
        });
    } else if (file.file.mimetype === "image/jpeg") {
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

    return path.join(req.protocol + '://', req.get('host'), targetPath.replace('public\\', '').replace('public/', ''));
}

exports.uploadPDF = (file, req, res) => {
    // upload file
    let tempPath = file.path;
    let targetPath = path.join(tempPath);

    if (file.mimetype === "image/png") {
        targetPath = targetPath + '.png';
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("File uploaded!")
            // res.status(200).send("File uploaded!");
        });
    } else if (file.mimetype === "image/jpeg") {
        targetPath = targetPath + '.jpg';
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("File uploaded!")
            // res.status(200).send("File uploaded!");
        });
    } else if (file.mimetype === "application/pdf") {
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

    return path.join(req.protocol + '://', req.get('host'), targetPath.replace('public\\', '').replace('public/', ''));
}

exports.uploadMultiFile = (req, res) => {
    // upload file
    console.log(req.files);
    let files = req.files
    let arr_file = []
    files.forEach(file => {
        let tempPath = file.path;

        let targetPath = path.join(tempPath);
        if (file.mimetype === "image/png") {
            targetPath = targetPath + '.png';
            fs.rename(tempPath, targetPath, err => {
                if (err) return handleError(err, res);
                console.log("File uploaded!")
                // res.status(200).send("File uploaded!");
            });
        } else if (file.mimetype === "image/jpeg") {
            targetPath = targetPath + '.jpg';
            fs.rename(tempPath, targetPath, err => {
                if (err) return handleError(err, res);
                console.log("File uploaded!")
                // res.status(200).send("File uploaded!");
            });
        } else {
            fs.unlink(tempPath, err => {
                if (err) return handleError(err, res);
                res.status(403).send("Only .png / .jpeg files are allowed!");
                return
            });
        }
        arr_file.push(path.join(req.get('host'), targetPath.replace('public\\', '').replace('public/', '')))
    });

    return arr_file;

}
