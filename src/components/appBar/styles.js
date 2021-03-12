import styled from "styled-components";
import {Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		borderBottom: "50px",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export const ToolbarStyled = styled(Toolbar)`
	display: flex !important;
	flex-direction: row !important;
	justify-content: flex-end !important;
`;
