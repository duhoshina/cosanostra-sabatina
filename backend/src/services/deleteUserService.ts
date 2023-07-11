import { UserModel } from "../models/user.model";

const deleteUser = async (email: String) => {

    await UserModel.deleteOne({ email: `${email}` });
};

export default deleteUser;