import React, { ButtonHTMLAttributes } from "react";
import { SpaceProps } from "styled-system";

import StyledIcon from "./IconStyle";


const Icon = ({ children, ...props }) => {
  return (
    <StyledIcon
      src={`/assets/images/icons/${children}.svg`}
      fallback={() => <span>{children?.trim()}</span>}
      {...props}
    />
  );
};

Icon.defaultProps = {
  variant: "medium",
  defaultcolor: "currentColor",
};

export default Icon;
