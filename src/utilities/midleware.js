const RequestLogger = (req, res, next) =>{
    console.log('Method:', req.method);
    console.log('Part:', req.path);
    console.log('Body:', req.body);
}

const unknownExport = (req, res) =>{
    res.status(404).send({
        error: 'unknown error'
    })
}

module.exports = {
    RequestLogger,
    unknownExport
}