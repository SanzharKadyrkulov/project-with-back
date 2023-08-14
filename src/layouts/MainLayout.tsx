import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};

export default MainLayout;
