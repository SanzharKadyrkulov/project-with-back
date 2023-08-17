import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import AuthContext, {
	useAuthContext,
} from "./contexts/AuthContext/AuthContext";

const App = () => {
	const { checkAuth } = useAuthContext();

	useEffect(() => {
		checkAuth();
	}, []);
	return <MainRoutes />;
};

export default App;
