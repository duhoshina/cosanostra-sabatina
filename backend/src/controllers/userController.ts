import createNewUser from '../services/createUserService';
import deleteUser from '../services/deleteUserService';
import { Request, Response } from 'express';

// create new user
export const createUserController = (req: Request, res: Response): void => {

    const { name, curso, email, password } = req.body;

    createNewUser(name, curso, email, password).then(() => {
        return res.status(201).send(`Cadastrado com sucesso! Nome: ${name}, Email: ${email}, Password: ${password}`)
    }).catch((err) => {
        return res.status(500).send(`Erro ao cadastrar: ${err}`);
    });
};

// delete user
export const deleteUserController = async (req: Request, res: Response) => {

    const { email } = req.body;

    deleteUser(email).then(() => {
        return res.status(200).send(`Usuário deletado com sucesso! ${email}`)
    }).catch(() => {
        return res.status(500).send(`Erro ao deletar usuário...`);
    });
};