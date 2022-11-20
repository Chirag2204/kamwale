const jwt = require('jsonwebtoken');


const UWITELISTED_URL = [
    'api/profile'
]

function admin(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECERET);
        if (decoded.user.isAdmin) {
            req.user = decoded.user;
            next();
            return
        }
        res.status(401).json({ msg: 'Token is not valid' });
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

function isAdmin(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        req.user = null;
        next();
        return
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECERET);
        req.user = decoded.user;
        next();
    } catch (err) {
        req.user = null;
        next();
    }
};

module.exports = {
    admin,
    isAdmin
}
