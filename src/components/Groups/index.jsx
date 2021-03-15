import Accordion from "@material-ui/core/Accordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {makeStyles} from "@material-ui/core/styles";
import {
	DivItems,
	DivPerfil,
	AccordionSummaryStyled,
	BoxStyled,
	TypographyStyled,
	DivStyled,
	CardUser,
	ListItemStyled,
	ListItemTextStyled,
	DividerStyled,
} from "./styles";
import {
	Box,
	LinearProgress,
	Typography,
	List,
	ListItem,
	ListItemText,
	Divider,
} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {useHabits} from "../../Providers/Habits";

const Groups = (props) => {
	return (
		<DivItems>
			<DivPerfil>
				<Card style={CardUser.root} elevation={20}>
					<div style={CardUser.bannerContainer}>
						<img
							alt="Banner Pic"
							style={CardUser.banner}
							src="https://source.unsplash.com/random/300x150"
						/>
					</div>
					<div style={CardUser.topProfile}>
						<Avatar variant="rounded" style={CardUser.avatar} />
					</div>
					<h3 style={CardUser.userName}>Username</h3>
					{/* <Typography variant="h2" component="h2">
						Username
					</Typography> */}
				</Card>
			</DivPerfil>
			<List>
				<ListItemStyled>
					<TypographyStyled>Photos</TypographyStyled>
					<BoxStyled display="flex" alignItems="center">
						<Box width="100%" mr={1}>
							<LinearProgress variant="determinate" {...props} />
						</Box>
						<Box minWidth={35}>
							<TypographyStyled>78 Pontos</TypographyStyled>
						</Box>
					</BoxStyled>
					<TypographyStyled>Jan 9, 2014</TypographyStyled>
				</ListItemStyled>
			</List>
			<DividerStyled />
			<List>
				<ListItemStyled>
					<TypographyStyled>Photos</TypographyStyled>
					<BoxStyled display="flex" alignItems="center">
						<Box width="100%" mr={1}>
							<LinearProgress variant="determinate" {...props} />
						</Box>
						<Box minWidth={35}>
							<TypographyStyled>78 Pontos</TypographyStyled>
						</Box>
					</BoxStyled>
					<TypographyStyled>Jan 9, 2014</TypographyStyled>
				</ListItemStyled>
			</List>
			<DividerStyled />
			<List>
				<ListItemStyled>
					<TypographyStyled>Photos</TypographyStyled>
					<BoxStyled display="flex" alignItems="center">
						<Box width="100%" mr={1}>
							<LinearProgress variant="determinate" {...props} />
						</Box>
						<Box minWidth={35}>
							<TypographyStyled>78 Pontos</TypographyStyled>
						</Box>
					</BoxStyled>
					<TypographyStyled>Jan 9, 2014</TypographyStyled>
				</ListItemStyled>
			</List>
			<DividerStyled />
			<List>
				<ListItemStyled>
					<TypographyStyled>Photos</TypographyStyled>
					<BoxStyled display="flex" alignItems="center">
						<Box width="100%" mr={1}>
							<LinearProgress variant="determinate" {...props} />
						</Box>
						<Box minWidth={35}>
							<TypographyStyled>78 Pontos</TypographyStyled>
						</Box>
					</BoxStyled>
					<TypographyStyled>Jan 9, 2014</TypographyStyled>
				</ListItemStyled>
			</List>
			<DividerStyled />
		</DivItems>
	);
};

export default Groups;
