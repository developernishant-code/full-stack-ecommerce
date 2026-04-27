let jwt = require('jsonwebtoken')
const Usermodel = require('../models/Usermodel')
const protect = async (req, res, next) => {
    let token = null
    if (req.cookies && req.cookies.jwt) {
        token = req.cookies.jwt
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token is Missing"
        })
    }
    let decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = await Usermodel.findOne({ _id: decoded.id })
    if (!req.user) {
        return res.status(403).json({
            success: false,
            message: "User not found"
        })
    }
    next()

}

function authorize(...roles) {
    return (req, res, next) => {
        console.log(roles)
        if (!req.user) {
            return res.status(403).json({
                success: false,
                message: "User not found"
            })
        }
        console.log(req.user)
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized"
            })
        }
        next()
    }
}

module.exports = { protect, authorize }