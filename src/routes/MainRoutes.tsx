import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";
import ActivationPage from "../pages/ActivationPage";

const MainRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/add" element={<AddProductPage />} />
				<Route path="/edit/:id" element={<EditProductPage />} />
			</Route>

			<Route path="/api/account/activate/" element={<ActivationPage />} />

			<Route path="/auth" element={<AuthPage />} />
		</Routes>
	);
};

export default MainRoutes;
