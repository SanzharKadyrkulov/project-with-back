import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import AuthContext from "./contexts/AuthContext/AuthContext";

const App = () => {
	return (
		<BrowserRouter>
			<AuthContext>
				<MainRoutes />
			</AuthContext>
		</BrowserRouter>
	);
};

export default App;
