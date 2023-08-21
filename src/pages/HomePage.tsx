import React, { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext/ProductContext";
import ProductItem from "../components/ProductItem";
import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
	const { getProducts, products } = useProductContext();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		getProducts();
	}, [searchParams]);

	console.log(products);

	return (
		<div>
			<Grid container spacing={2} justifyContent="center">
				{products.map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</Grid>
		</div>
	);
};

export default HomePage;
