import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useProductContext } from "../contexts/ProductContext/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function EditProductPage() {
	const { categories, getCategories, oneProduct, getOneProduct, editProduct } =
		useProductContext();
	const [formValue, setFormValue] = useState({
		title: "",
		description: "",
		price: "",
		image: "",
		category: "",
	});

	const { id } = useParams() as { id: string };
	const navigate = useNavigate();

	useEffect(() => {
		getCategories();
		getOneProduct(+id);
	}, []);

	useEffect(() => {
		if (oneProduct) {
			setFormValue({
				...oneProduct,
				category: oneProduct.category.id.toString(),
				image: "",
			});
		}
	}, [oneProduct]);

	function handleChange(
		e:
			| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| SelectChangeEvent<string>
	) {
		if (e.target.name === "image") {
			const target = e.target as HTMLInputElement;
			const file: File = (target.files as FileList)[0];
			setFormValue({
				...formValue,
				[target.name]: file,
			});
		} else {
			setFormValue({
				...formValue,
				[e.target.name]: e.target.value,
			});
		}
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			!formValue.title.trim() ||
			!formValue.description.trim() ||
			!formValue.price.trim() ||
			!formValue.category
		) {
			alert("fill all fields");
			return;
		}

		const data = new FormData(event.currentTarget);

		if (!formValue.image) {
			data.delete("image");

			editProduct(+id, data);
		} else {
			editProduct(+id, data);
		}
		navigate(-1);
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Edit Product
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							label="Title"
							name="title"
							autoFocus
							value={formValue.title}
							onChange={handleChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="description"
							label="Description"
							value={formValue.description}
							onChange={handleChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							type="number"
							name="price"
							label="Price"
							value={formValue.price}
							onChange={handleChange}
						/>

						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Category</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								name="category"
								label="Category"
								value={formValue.category}
								onChange={handleChange}
							>
								{categories.map((item) => (
									<MenuItem key={item.id} value={item.id}>
										{item.title}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<TextField
							margin="normal"
							type="file"
							required
							fullWidth
							name="image"
							onChange={handleChange}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Save
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
