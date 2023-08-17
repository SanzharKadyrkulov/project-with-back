import { ICategory, IProduct } from "../../models/product";

export interface initStateProducts {
	products: IProduct[];
	oneProduct: IProduct | null;
	categories: ICategory[];
}

export interface IProductContextTypes extends initStateProducts {
	getProducts: () => void;
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
