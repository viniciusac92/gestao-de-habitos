import { Toolbar } from "@material-ui/core";
import { currentColor1, currentColor3 } from "../../styles/globalStyles";

import styled from "styled-components";

export const ToolbarBox = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: ${currentColor1};
  box-shadow: ${`2px 2px 0 ${currentColor3}`};
`;
