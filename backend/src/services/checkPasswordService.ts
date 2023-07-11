import * as bcrypt from 'bcrypt';

const checkPassword = async(user: any, password: string) => {

    const checkPassword = await bcrypt.compare(password, user.password_hash);

    if(!checkPassword) {
        throw new Error(`Senha incorreta`);
    };

};

export default checkPassword;