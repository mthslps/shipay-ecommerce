import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray2};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 10px 14px 10px;
  width: 300px;
`;

export const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
