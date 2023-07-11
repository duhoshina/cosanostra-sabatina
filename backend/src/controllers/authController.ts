import * as jwt from 'jsonwebtoken';
import * as authConfig from '../config/auth.json';
import checkPasswordService from '../services/checkPasswordService';
import { UserModel } from '../models/user.model';
import { Request, Response } from 'express';

export const authUserController = async(req: Request, res: Response) => {
    
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(500).json({error: "Todos os campos são obrigatórios"});
    }

    const user = await UserModel.findOne({ email: `${email}` });

    if(!user) {
        return res.status(404).json({error:`Usuário não registrado no sistema.`});
    };

    checkPasswordService(user, password).then(() => {

        const token: any = jwt.sign({
            id: user.id,
            name: user.name
        }, authConfig.SECRET, {
            expiresIn: 1200
        });

        return res.status(200).json({
            email,
            token
        });
    }).catch((err) => {
        return res.status(500).send(`Ops, aconteceu um erro: ${err}`);
    });
};