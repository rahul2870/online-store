import React from "react";
import styled from "styled-components";
import { FlexboxProps, SpaceProps } from "styled-system";
import Box from "../Box";
import Icon from "../icon/Icon";
import { AccordionHeaderWrapper } from "./AccordionStyle";

export const StyledAccordionHeader = styled(Box)``;


const AccordionHeader = ({ children, showIcon, open, ...props }) => {
  return (
    <AccordionHeaderWrapper
      alignItems="center"
      justifyContent="space-between"
      open={open}
      {...props}
    >
      {children}
      {showIcon && (
        <Icon
          className="caret-icon"
          variant="small"
          defaultcolor="currentColor"
        >
          chevron-right
        </Icon>
      )}
    </AccordionHeaderWrapper>
  );
};

AccordionHeader.defaultProps = {
  showIcon: true,
  py: "0.5rem",
  px: "1rem",
};

export default AccordionHeader;
