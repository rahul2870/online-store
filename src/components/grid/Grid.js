import React, { Children, cloneElement, ReactElement } from "react";
import { FlexboxProps } from "styled-system";
import StyledGrid from "./GridStyle";

const Grid = ({ children, ...props }) => {
  let childList = children;

  if (props.container) {
    childList = Children.map(children, (child) => {
      return cloneElement(child, {
        spacing: props.spacing,
        horizontal_spacing: props.horizontal_spacing,
        vertical_spacing: props.vertical_spacing,
      });
    });
  }

  return <StyledGrid {...props}>{childList}</StyledGrid>;
};

Grid.defaultProps = {
  spacing: 0,
  containerHeight: "unset",
};

export default Grid;
