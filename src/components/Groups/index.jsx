import {
	DivItems,
	DivPerfil,
	BoxStyled,
	TypographyStyled,
	CardUser,
	ListItemStyled,
	DividerStyled,
	LinearProgressStyled,
} from "./styles";
import {Box, LinearProgress, List} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {useGroup} from "../../Providers/Group";
import {useProviderUser} from "../../Providers/User";
import {useEffect} from "react";
import {useState} from "react";

const Groups = () => {
	const {group} = useGroup();
	const {userName} = useProviderUser();

	console.log(group);
	console.log(group && Object.entries(group.users).sort());

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
								<TypographyStyled>{`${userProfile.username} #${
									index + 1
								}`}</TypographyStyled>
								<BoxStyled display="flex" alignItems="center">
									<Box width="150%" mr={1}>
										<LinearProgressStyled
											variant="determinate"
											color="primary"
											{...{value: `${group?.users[index].group}`}}
										/>
									</Box>
									<Box minWidth={35}>
										<TypographyStyled variant="body2">
											{`${group?.users[index].group}%`}
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
