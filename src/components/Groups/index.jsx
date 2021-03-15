import {
	DivItems,
	DivPerfil,
	BoxStyled,
	TypographyStyled,
	CardUser,
	ListItemStyled,
	DividerStyled,
} from "./styles";
import {Box, LinearProgress, List} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {useGroup} from "../../Providers/Group";
import {useProviderUser} from "../../Providers/User";
import {useEffect} from "react";
import {useState} from "react";

const Groups = (props) => {
	const {group} = useGroup();
	const {userName} = useProviderUser();
	const [progress, setProgress] = useState(10);

	useEffect(() => {
		setProgress((prevProgress) =>
			prevProgress >= 100 ? 10 : prevProgress + 10
		);
	}, []);

	console.log(group);
	console.log(group?.users);
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
					<h3 style={CardUser.userName}>{userName}</h3>
				</Card>
			</DivPerfil>
			{group?.users.map((userProfile, index) => {
				return (
					<div key={index}>
						<List>
							<ListItemStyled>
								<TypographyStyled>{userProfile.username}</TypographyStyled>
								<BoxStyled display="flex" alignItems="center">
									<Box width="100%" mr={1}>
										<LinearProgress variant="determinate" {...props} />
									</Box>
									<Box minWidth={35}>
										<TypographyStyled variant="body2">
											{`${progress}%`}
										</TypographyStyled>
									</Box>
								</BoxStyled>
								<TypographyStyled>{`Text me! ${userProfile.email}`}</TypographyStyled>
							</ListItemStyled>
						</List>
						<DividerStyled />
					</div>
				);
			})}
		</DivItems>
	);
};

export default Groups;
