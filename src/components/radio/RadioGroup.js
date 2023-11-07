import { Children, cloneElement, ReactElement } from "react";
import { SpaceProps } from "styled-system";
import { RadioProps } from "./Radio";
import StyledRadioGroup from "./RadioGroup.style";


const RadioGroup = ({
  children,
  value,
  name,
  onChange,
  ...props
}) => {
  return (
    <StyledRadioGroup {...props}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          id: index,
          name,
          checked: value ? child.props.value === value : undefined,
          onChange,
        });
      })}
    </StyledRadioGroup>
  );
};

export default RadioGroup;
