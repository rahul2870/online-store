import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";


const Box = styled.div(
  ({ shadow, cursor, transition, theme }) => ({
    boxShadow: theme.shadows[shadow],
    cursor,
    transition,
  }),
  compose(layout, space, color, position, flexbox, flex, border, typography)
);

Box.defaultProps = {
  shadow: 0,
  cursor: "unset",
};

export default Box;
