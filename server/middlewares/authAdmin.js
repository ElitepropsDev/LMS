import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: 'Not Authorized. Login Again' });
        }

        // Decode the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the role inside the token is 'admin'
        if (token_decode.role !== 'admin') {
            return res.json({ success: false, message: 'Access Denied. Admins Only.' });
        }

        // 🛡️ Added: Attach user info to request so controllers can use it
        req.user = token_decode;

        // If everything is fine, move to the next function
        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Session expired. Please login again." });
    }
}

export default authAdmin;