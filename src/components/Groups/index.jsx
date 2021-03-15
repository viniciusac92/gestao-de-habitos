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
import {useGroup} from "../../Providers/Group";

const Groups = (props) => {
	const {group} = useGroup();

	console.log(group);
	console.log(group["id"]);

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
					<h3 style={CardUser.userName}>username</h3>
					{/* <Typography variant="h2" component="h2">
						Username
					</Typography> */}
				</Card>
			</DivPerfil>
			{/* {group.users.map((userProfile, index) => {
				<div key={index}>
					<List>
						<ListItemStyled>
							<TypographyStyled>{userProfile.username}</TypographyStyled>
							<BoxStyled display="flex" alignItems="center">
								<Box width="100%" mr={1}>
									<LinearProgress variant="determinate" {...props} />
								</Box>
								<Box minWidth={35}>
									<TypographyStyled variant="body2">78 Pontos</TypographyStyled>
								</Box>
							</BoxStyled>
							<TypographyStyled>Lorem Ipsum</TypographyStyled>
						</ListItemStyled>
					</List>
					<DividerStyled />
				</div>;
			})} */}
			<List>
				<ListItemStyled>
					{/* <TypographyStyled>{group.users[0].username}</TypographyStyled> */}
					<BoxStyled display="flex" alignItems="center">
						<Box width="100%" mr={1}>
							<LinearProgress variant="determinate" {...props} />
						</Box>
						<Box minWidth={35}>
							<TypographyStyled variant="body2">78 Pontos</TypographyStyled>
						</Box>
					</BoxStyled>
					<TypographyStyled>Lorem Ipsum</TypographyStyled>
				</ListItemStyled>
			</List>
			<DividerStyled />
			<List>
				<ListItemStyled>
					{/* <TypographyStyled>{group.users[0].username}</TypographyStyled> */}
					<BoxStyled display="flex" alignItems="center">
						<Box width="100%" mr={1}>
							<LinearProgress variant="determinate" {...props} />
						</Box>
						<Box minWidth={35}>
							<TypographyStyled variant="body2">78 Pontos</TypographyStyled>
						</Box>
					</BoxStyled>
					<TypographyStyled>Lorem Ipsum</TypographyStyled>
				</ListItemStyled>
			</List>
			<DividerStyled />
			<List>
				<ListItemStyled>
					{/* <TypographyStyled>{group.users[0].username}</TypographyStyled> */}
					<BoxStyled display="flex" alignItems="center">
						<Box width="100%" mr={1}>
							<LinearProgress variant="determinate" {...props} />
						</Box>
						<Box minWidth={35}>
							<TypographyStyled variant="body2">78 Pontos</TypographyStyled>
						</Box>
					</BoxStyled>
					<TypographyStyled>Lorem Ipsum</TypographyStyled>
				</ListItemStyled>
			</List>
			<DividerStyled />
			<List>
				<ListItemStyled>
					{/* <TypographyStyled>{group.users[0].username}</TypographyStyled> */}
					<BoxStyled display="flex" alignItems="center">
						<Box width="100%" mr={1}>
							<LinearProgress variant="determinate" {...props} />
						</Box>
						<Box minWidth={35}>
							<TypographyStyled variant="body2">78 Pontos</TypographyStyled>
						</Box>
					</BoxStyled>
					<TypographyStyled>Lorem Ipsum</TypographyStyled>
				</ListItemStyled>
			</List>
			<DividerStyled />
		</DivItems>
	);
};

export default Groups;
