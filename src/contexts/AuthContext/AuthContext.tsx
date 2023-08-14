import React, { FC, ReactNode, createContext, useContext } from "react";
import { IAuthContextTypes } from "./types";

const authContext = createContext<IAuthContextTypes | null>(null);

export function useAuthContext(): IAuthContextTypes {
	return useContext(authContext) as IAuthContextTypes;
}

interface IAuthContextProps {
	children: ReactNode;
}
const AuthContext: FC<IAuthContextProps> = ({ children }) => {
	const value = {
		user: null,
	};
	return <authContext.Provider value={value}>{children} </authContext.Provider>;
};

export default AuthContext;
