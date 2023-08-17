import React, {
	FC,
	ReactNode,
	createContext,
	useContext,
	useReducer,
} from "react";
import {
	IProductContextActions,
	IProductContextTypes,
	initStateProducts,
} from "./types";
import $axios from "../../utils/axios";
import { BASE_URL } from "../../utils/consts";

const productContext = createContext<IProductContextTypes | null>(null);

export function useProductContext(): IProductContextTypes {
	return useContext(productContext) as IProductContextTypes;
}

const initState: initStateProducts = {
	products: [],
	oneProduct: null,
	categories: [],
};

function reducer(state: initStateProducts, action: IProductContextActions) {
	switch (action.type) {
		case "products":
			return { ...state, products: action.payload };
		case "oneProduct":
			return { ...state, oneProduct: action.payload };
		case "categories":
			return { ...state, categories: action.payload };
		default:
			return state;
	}
}

interface ProductContextProps {
	children: ReactNode;
}
const ProductContext: FC<ProductContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	async function getProducts() {
		try {
			const { data } = await $axios.get(`${BASE_URL}/products/`);

			dispatch({
				type: "products",
				payload: data.results,
			});
		} catch (e) {
			console.log(e);
		}
	}

	const value = {
		products: state.products,
		oneProduct: state.oneProduct,
		categories: state.categories,
		getProducts,
	};
	return (
		<productContext.Provider value={value}>{children}</productContext.Provider>
	);
};

export default ProductContext;
