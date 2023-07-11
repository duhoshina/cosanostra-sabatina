import * as bcrypt from "bcrypt";
import { UserModel } from "../models/user.model";

const generatePasswordHash = async(password: any) => {

    const saltRounds = 10;
    
    let passwordHash = await bcrypt.hash(password, saltRounds);

    return passwordHash;
};

const createNewUser = async(name: String, curso: String, email: String, password: String) => {

    if(!email || !password) {
        throw new Error(`Todos os campos são obrigatórios.`);
    };

    const user = await UserModel.findOne({ email: `${email}`});

    if(user){
        throw new Error(`Usuário já cadastrado!`);
    } else {
        let newPasswordHash = await generatePasswordHash(password);

        const newUser = {
            name,
            email,
            curso,
            password_hash: `${newPasswordHash}`,
        };
        
        try { 
            await UserModel.create(newUser);
        } catch {
            throw new Error(`Erro ao inserir o usuário no banco de dados!`);
        }
    }

}

export default createNewUser;