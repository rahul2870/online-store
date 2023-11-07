import styled from "styled-components";


export const StyledCategory = styled.div`
  position: relative;
  .cursor-pointer {
    cursor: pointer;
  }
  .dropdown-icon {
    margin-left: 0.25rem;
    transition: all 250ms ease-in-out;
    transform: rotate(${(props) => (props?.open ? "90deg" : "0deg")});
  }
`;
