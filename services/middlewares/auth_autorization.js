const jwt = require('jsonwebtoken')
const secret = "dawjd123"
const invalidTokens = []
const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log(token)
    const index = invalidTokens.findIndex(item => item === token)

    if(index !== -1) return res.status(401).end();

    jwt.verify(token, secret, (err, decoded) => {
        if(err) return res.status(401).end();

        next();
    })
}


module.exports = verifyJWT