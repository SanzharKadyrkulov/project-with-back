import { IUser } from "../../models/user";

export interface IAuthContextTypes {
	user: IUser | null;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserRegister extends IUserLogin {
	password_confirm: string;
}
