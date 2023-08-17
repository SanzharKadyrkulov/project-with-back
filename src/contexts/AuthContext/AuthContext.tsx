import React, {
	FC,
	ReactNode,
	createContext,
	useContext,
	useState,
} from "react";
import { IAuthContextTypes, ITokens, IUserLogin, IUserRegister } from "./types";
import axios from "axios";
import { BASE_URL } from "../../utils/consts";
import $axios from "../../utils/axios";

const authContext = createContext<IAuthContextTypes | null>(null);

export function useAuthContext(): IAuthContextTypes {
	return useContext(authContext) as IAuthContextTypes;
}

interface IAuthContextProps {
	children: ReactNode;
}
const AuthContext: FC<IAuthContextProps> = ({ children }) => {
	const [user, setUser] = useState(null);

	async function register(credentials: IUserRegister) {
		try {
			await axios.post<ITokens>(`${BASE_URL}/account/register/`, credentials);
		} catch (e) {
			console.log(e);
		}
	}

	async function login(credentials: IUserLogin) {
		try {
			const { data: tokens } = await axios.post<ITokens>(
				`${BASE_URL}/account/login/`,
				credentials
			);
			localStorage.setItem("tokens", JSON.stringify(tokens));

			const { data } = await $axios.get(`${BASE_URL}/account/profile/`);
			setUser(data);
		} catch (e) {
			console.log(e);
		}
	}

	function logout() {
		localStorage.removeItem("tokens");
		setUser(null);
	}

	async function checkAuth() {
		try {
			const tokens = JSON.parse(localStorage.getItem("tokens") as string);
			if (tokens) {
				const { data } = await $axios.get(`${BASE_URL}/account/profile/`);
				setUser(data);
			}
		} catch (e) {
			console.log(e);
		}
	}

	const value = {
		user,
		register,
		login,
		logout,
		checkAuth,
	};
	return <authContext.Provider value={value}>{children} </authContext.Provider>;
};

export default AuthContext;
