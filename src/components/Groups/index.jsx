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
} from "./styles";
import {Box, LinearProgress, Typography} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {useHabits} from "../../Providers/Habits";

const Groups = (props) => {
	// const useStyles = makeStyles({
	// 	root: {
	// 		width: "100%",
	// 	},
	// });

	// const classes = useStyles();

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
				</Card>
			</DivPerfil>
			<Accordion>
				<AccordionSummaryStyled
					expandIcon={<ExpandMoreIcon />}
					aria-label="Expand"
					aria-controls="additional-actions1-content"
					id="additional-actions1-header">
					<TypographyStyled>
						MembroDoGrupo#1teste
						<BoxStyled display="flex" alignItems="center">
							<Box width="100%" mr={1}>
								<LinearProgress variant="determinate" {...props} />
							</Box>
							<Box minWidth={35}>
								<Typography variant="body2" color="textSecondary">
									78 Pontos
								</Typography>
							</Box>
						</BoxStyled>
					</TypographyStyled>
				</AccordionSummaryStyled>
				<Typography variant="body2" color="textSecondary">
					Lorem Ipsum
				</Typography>
			</Accordion>
			<Accordion>
				<AccordionSummaryStyled
					expandIcon={<ExpandMoreIcon />}
					aria-label="Expand"
					aria-controls="additional-actions1-content"
					id="additional-actions1-header">
					<TypographyStyled>
						MembroDoGrupo#2
						<BoxStyled display="flex" alignItems="center">
							<Box width="100%" mr={1}>
								<LinearProgress variant="determinate" {...props} />
							</Box>
							<Box minWidth={35}>
								<Typography variant="body2" color="textSecondary">
									50 Pontos
								</Typography>
							</Box>
						</BoxStyled>
					</TypographyStyled>
				</AccordionSummaryStyled>
				<Typography variant="body2" color="textSecondary">
					Lorem Ipsum
				</Typography>
			</Accordion>
			<Accordion>
				<AccordionSummaryStyled
					expandIcon={<ExpandMoreIcon />}
					aria-label="Expand"
					aria-controls="additional-actions1-content"
					id="additional-actions1-header">
					<TypographyStyled>
						MembroDoGrupo#3
						<BoxStyled display="flex" alignItems="center">
							<Box width="100%" mr={1}>
								<LinearProgress variant="determinate" {...props} />
							</Box>
							<Box minWidth={35}>
								<Typography variant="body2" color="textSecondary">
									42 Pontos
								</Typography>
							</Box>
						</BoxStyled>
					</TypographyStyled>
				</AccordionSummaryStyled>
				<Typography variant="body2" color="textSecondary">
					Lorem Ipsum
				</Typography>
			</Accordion>
		</DivItems>
	);
};

export default Groups;
