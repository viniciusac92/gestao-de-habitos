import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import FullScreenDialog from "./dialog";
import { useGroup } from "../../../Providers/Group";

const ActionsInAccordionSummary = ({ code }) => {
  const { goals } = useGroup();

  return (
    <div>
      {code !== null ? (
        goals.map((goal) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <IconButton>
                    <FullScreenDialog title={goal.title} />
                  </IconButton>
                }
                label={goal.title}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Dicas: dica relacionada ao goal em questão
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={
                <IconButton>
                  Escolha
                </IconButton>
              }
              label="sua escolha"
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">Habitos editáveis</Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default ActionsInAccordionSummary;
