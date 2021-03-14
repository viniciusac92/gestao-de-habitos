import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {IconButton} from "@material-ui/core";
import { useGroup } from '../../Providers/Group'

const ActionsInAccordionSummary = ({code}) => {

	const { group } = useGroup()

	console.log(group)

	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-label="Expand"
					aria-controls="additional-actions1-content">
					<FormControlLabel
						aria-label="Acknowledge"
						onClick={(event) => event.stopPropagation()}
						onFocus={(event) => event.stopPropagation()}
						control={
							<>
								{code !== null ? (
									<>
										<IconButton>
											<AddCircleOutlineIcon />
										</IconButton>
									</>
								) : (
									<>
										<IconButton>
											<AddCircleOutlineIcon />
										</IconButton>
									</>
								)}
							</>
						}
						label={
							code !== null
								? "Use tecnologias diferentes num mesmo código"
								: "Aprenda algo novo"
						}
					/>
				</AccordionSummary>
				<Typography color="textSecondary">
					Dicas: tente sempre usar boas práticas para que a vida útil de seu
					código dure mais
				</Typography>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-label="Expand"
					aria-controls="additional-actions2-content">
					<FormControlLabel
						aria-label="Acknowledge"
						onClick={(event) => event.stopPropagation()}
						onFocus={(event) => event.stopPropagation()}
						control={
							<>
								{code !== null ? (
									<>
										<IconButton>
											<AddCircleOutlineIcon />
										</IconButton>
									</>
								) : (
									<>
										<IconButton>
											<AddCircleOutlineIcon />
										</IconButton>
									</>
								)}
							</>
						}
						label={code !== null ? "Refatorar código" : "leia 60 páginas "}
					/>
				</AccordionSummary>
				<AccordionDetails>
					<Typography color="textSecondary">
						Dicas: tente sempre usar boas práticas para que a vida útil de seu
						código dure mais
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-label="Expand"
					aria-controls="additional-actions3-content">
					<FormControlLabel
						aria-label="Acknowledge"
						onClick={(event) => event.stopPropagation()}
						onFocus={(event) => event.stopPropagation()}
						control={
							<>
								{code !== null ? (
									<>
										<IconButton>
											<AddCircleOutlineIcon />
										</IconButton>
									</>
								) : (
									<>
										<IconButton>
											<AddCircleOutlineIcon />
										</IconButton>
									</>
								)}
							</>
						}
						label={code !== null ? "Codar 30min hoje" : "faça algo"}
					/>
				</AccordionSummary>
				<AccordionDetails>
					<Typography color="textSecondary">Dica: tente.......</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default ActionsInAccordionSummary
