import { cloneElement, InputHTMLAttributes, useEffect, useState } from "react";
import Box from "../Box";
import { SyledTextField, TextFieldWrapper } from "./TextFieldStyle";


const TextField = ({ id, label, errorText, labelColor, endAdornment, ...props }) => {
  const [textId, setTextId] = useState(id);

  // extract spacing props
  let spacingProps = {};
  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p"))
      spacingProps[key] = props[key];
  }

  useEffect(() => {
    if (!id) setTextId(Math.random());
  }, []);

  return (
    <TextFieldWrapper
      color={labelColor && `${labelColor}.main`}
      fullwidth={props.fullwidth}
      {...spacingProps}
    >
      {label && <label htmlFor={textId}>{label}</label>}
      <Box position="relative">
        <SyledTextField id={textId} {...props} />
        {endAdornment &&
          cloneElement(endAdornment, {
            className: `end-adornment ${endAdornment.className}`,
          })}
      </Box>
      {errorText && <small>{errorText}</small>}
    </TextFieldWrapper>
  );
};

TextField.defaultProps = {
  color: "default",
};

export default TextField;
