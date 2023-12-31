import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";
import LiveSearch from "./LiveSearch";

export default function Navbar() {
	const { user, logout } = useAuthContext();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component={Link} to="/">
						News
					</Typography>

					<Box sx={{ display: "flex", ml: 2, flexGrow: 1 }}>
						<Button component={Link} to="/add" sx={{ color: "white" }}>
							Add Product
						</Button>
					</Box>

					<LiveSearch />

					{user ? (
						<Box display="flex" alignItems="center" gap={1}>
							<Typography>{user.email}</Typography>
							<Button
								onClick={logout}
								sx={{
									color: "white",
									"&:hover": {
										backgroundColor: "red",
									},
								}}
							>
								Logout
							</Button>
						</Box>
					) : (
						<Button component={Link} to="/auth" color="inherit">
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
