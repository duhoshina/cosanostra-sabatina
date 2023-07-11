import { Request, Response } from "express";

export const adminController = (req: Request, res: Response) => {
    res.status(200).send('Você está dentro do sistema admin');
};