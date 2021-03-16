import styled from "styled-components";

// functions
export const ButtonStyle = styled.button`
  background: ${(props) => props.theme.colors.blue};
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  color: ${(props) => props.theme.colors.white};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  height: 35px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  transition: all 0.4s ease-out;

  &:hover {
    &:active {
      pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
      }
    }

  }
  &:before {
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: width 0.2s ease-in;
    width: 0;
  }
`;

export const Content = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
  width: 100%;
`;
