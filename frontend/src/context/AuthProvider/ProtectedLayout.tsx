import Login from "../../routes/Login/Login";
import { useAuth } from "./useAuth"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {

    const auth = useAuth();

    if(!auth.email) {
        return (
            <Login />
        )
    }

    return children;
}