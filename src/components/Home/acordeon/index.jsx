import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";

export default function ActionsInAccordionSummary({ code }) {
  return (
    <div>
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
              <>
                {code !== null ? (
                  <button>Codar</button>
                ) : (
                  <button>Teorico</button>
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
        <AccordionDetails style={{ margin: "0", padding: "0" }}>
          <Typography color="textSecondary">Dicas: tente....</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
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
          aria-controls="additional-actions3-content"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
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
