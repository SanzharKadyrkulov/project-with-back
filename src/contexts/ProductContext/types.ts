import { ICategory, IProduct } from "../../models/product";

export interface initStateProducts {
	products: IProduct[];
	oneProduct: IProduct | null;
	categories: ICategory[];
}

export interface IProductContextTypes extends initStateProducts {
	getProducts: () => void;
	getCategories: () => void;
	addProduct: (newProduct: any) => void;
	deleteProduct: (id: number) => void;
	getOneProduct: (id: number) => void;
	editProduct: (id: number, newData: any) => void;
}

interface IProductsAction {
	type: "products";
	payload: IProduct[];
}
interface IOneProductAction {
	type: "oneProduct";
	payload: IProduct;
}
interface ICategoriesAction {
	type: "categories";
	payload: ICategory[];
}
export type IProductContextActions =
	| IProductsAction
	| IOneProductAction
	| ICategoriesAction;

export interface IProductCreate {
	title: string;
	description: string;
	price: string;
	image: File;
	category: number;
}
