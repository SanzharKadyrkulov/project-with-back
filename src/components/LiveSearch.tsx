import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";

const StyledTextField = styled(TextField)(() => ({
	"& .MuiInputBase-root .MuiInputBase-input": {
		color: "white",
	},
}));

const LiveSearch = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchVal, setSearchVal] = useState(searchParams.get("title") || "");

	useEffect(() => {
		setSearchParams({
			title: searchVal,
		});
	}, [searchVal]);

	return (
		<StyledTextField
			value={searchVal}
			onChange={(e) => setSearchVal(e.target.value)}
		/>
	);
};

export default LiveSearch;
