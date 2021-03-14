import styled from "styled-components";
import {Box, AccordionSummary, Typography} from "@material-ui/core";
import {
	currentColor3,
	currentColor1,
	neutralColor,
} from "../../styles/globalStyles";

export const DivStyled = styled.div`
	display: flex;
	flex-direction: row;
`;

export const DivPerfil = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const CardUser = {
	root: {
		width: "1420px",
		height: "300px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: currentColor1,
		boxShadow: `2px 2px 8px ${currentColor3}`,
	},
	topProfile: {
		position: "absolute",
		marginTop: "75px",
		display: "flex",
		flexDirection: "column",
		width: "300px",
		justifyContent: "center",
		alignItems: "center",
	},
	avatar: {
		width: "125px",
		height: "125px",
		border: "3px solid #FFF",
		backgroundColor: neutralColor,
	},

	banner: {
		width: "100%",
		height: "100%",
		borderBottom: `2px solid ${neutralColor}`,
	},
	bannerContainer: {
		backgroundColor: neutralColor,
		width: "300px",
		height: "150px",
	},
	userName: {
		color: neutralColor,
		margin: "5px",
		maxWidth: "285px",
	},
};

export const TypographyStyled = styled(Typography)`
	width: 100% !important;
`;

export const BoxStyled = styled(Box)`
	/* flex-direction: column !important; */
	width: 100%;
`;

export const AccordionSummaryStyled = styled(AccordionSummary)`
	/* flex-direction: column !important; */
`;

export const DivItems = styled.div`
	width: 60%;
	height: 45%;
	display: flex;
	flex-direction: column;

	@media (max-width: 600px) {
		align-items: center;
		width: 90%;
	}
`;
