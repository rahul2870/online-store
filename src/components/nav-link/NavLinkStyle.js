import systemCss from "@styled-system/css";
import styled from "styled-components";
import { color, ColorProps, compose, space, SpaceProps } from "styled-system";


const StyledNavLink = styled.a(
  ({ isCurrentRoute, theme }) =>
    systemCss({
      position: "relative",
      color: isCurrentRoute ? theme.colors.primary.main : "auto",
      transition: "all 150ms ease-in-out",
      "&:hover": {
        color: `${theme.colors.primary.main} !important`,
      },
      "& svg path": {
        fill: isCurrentRoute ? theme.colors.primary.main : "auto",
      },
      "& svg polyline, svg polygon": {
        color: isCurrentRoute ? theme.colors.primary.main : "auto",
      },
    }),
  compose(space, color)
);

export default StyledNavLink;
