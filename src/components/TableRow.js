
import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from "styled-system";
import { getTheme } from "../utils/utils";


const TableRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${({ boxShadow }) => getTheme(`shadows.${boxShadow || "small"}`)};

  & > * {
    flex: 1 1 0;
  }

  .pre {
    white-space: pre;
  }

  ${space}
  ${color}
  ${border}
`;

TableRow.defaultProps = {
  bg: "body.paper",
};

export default TableRow;
