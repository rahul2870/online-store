import React from "react";
import styled, { CSSProperties } from "styled-components";
import {
  border,
  color,
  flex,
  layout,
  space, 
  typography, 
} from "styled-system";

const Typography = styled.div`
  ${(props) =>
    props.ellipsis
      ? `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `
      : ""}

  ${border}
  ${typography}
  ${space}
  ${color}
  ${flex}
  ${layout}
`;

export const H1 = (props) => (
  <Typography as="h1" mb="0" mt="0" fontSize="30px" {...props} />
);
export const H2 = (props) => (
  <Typography as="h2" mb="0" mt="0" fontSize="25px" {...props} />
);
export const H3 = (props) => (
  <Typography as="h3" mb="0" mt="0" fontSize="20px" {...props} />
);
export const H4 = (props) => (
  <Typography
    as="h4"
    mb="0"
    mt="0"
    fontWeight="600"
    fontSize="17px"
    {...props}
  />
);
export const H5 = (props) => (
  <Typography
    as="h5"
    mb="0"
    mt="0"
    fontWeight="600"
    fontSize="16px"
    {...props}
  />
);
export const H6 = (props) => (
  <Typography
    as="h6"
    mb="0"
    mt="0"
    fontWeight="600"
    fontSize="14px"
    {...props}
  />
);

export const Paragraph = (props) => (
  <Typography as="p" mb="0" mt="0" {...props} />
);

export const Span = (props) => (
  <Typography as="span" fontSize="16px" {...props} />
);
export const SemiSpan = (props) => (
  <Typography as="span" fontSize="14px" color="text.muted" {...props} />
);
export const Small = (props) => (
  <Typography as="span" fontSize="12px" {...props} />
);
export const Tiny = (props) => (
  <Typography as="span" fontSize="10px" {...props} />
);

// const H1 =
export default Typography;
