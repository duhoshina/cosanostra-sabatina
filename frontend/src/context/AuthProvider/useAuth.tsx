import React from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = ( ) => {
    const context = React.useContext(AuthContext);

    return context;
};