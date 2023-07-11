import * as jwt from 'jsonwebtoken';
import * as authConfig from '../config/auth.json';

const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).send(`Token não foi fornecido`);
  };

  const token = authHeader.split(' ')[1];

  jwt.verify(token, authConfig.SECRET, (err, decoded) => {

    if(err) {
        return res.status(401).send(`Não autorizado: ${err}`);
    }

    req.userLogged = decoded;

    console.log(decoded);

    return next();
  });

};

export default authMiddleware;