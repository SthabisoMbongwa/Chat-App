import jwt from 'jsonwebtoken';

const protectRoute = (req, res, next) => {
    try{
        const token = req.cookies.jwt
    }
}