import path from "path";
import { fileURLToPath } from "url";
import bcrypt from 'bcrypt';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPas = (user, password) => {
    return bcrypt.compareSync(password, user.password);
}
export { __dirname };
export const userApiBlock = () => {
    return async (req, res, next) => {
        try {    
            const { rol } = req.session.user;
            if(!rol){
                res.status(401).send('HTTP 401 Unauthorized: Log in needed');
            }
            if (rol === "admin") {
                next()
            } else {
                return res.status(403).json({ message: "Access denied. You do not have permission to access this API function." })
            }
            } catch (error) {
                res.status(401).send('HTTP 401 Unauthorized: Log in needed');
            }
    }
}
export const adminApiBlock = () => {
    return async (req, res, next) => {
        try {    
        const { rol } = req.session.user;
        if(!rol){
            res.status(401).send('HTTP 401 Unauthorized: Log in needed');
        }
        if (rol === "user") {
            next()
        } else {
            return res.status(403).json({ message: "Access denied. You do not have permission to access this API function." })
        }
        } catch (error) {
            res.status(401).send('HTTP 401 Unauthorized: Log in needed');
        }
    }
}