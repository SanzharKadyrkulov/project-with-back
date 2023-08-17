export interface ICategory {
	id: number;
	title: string;
}
export interface IProduct {
	id: number;
	title: string;
	description: string;
	price: string;
	image: string;
	category: ICategory;
}
