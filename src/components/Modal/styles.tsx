import styled from "styled-components";

import CloseIcon from "../IconExporter";

interface IProps {
  noChildrenPadding?: boolean;
  fullHeightOnMobile?: boolean;
}

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  background-color: rgba(39, 39, 39, 0.63);
  height: 100%;
  position: fixed;
  transition: all ease 0.3s;
  width: 100%;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  left: 0;
  top: 0;
`;

export const ChildrenWrapper = styled.div<IProps>`
  overflow: auto;
  height: ${({ fullHeightOnMobile }) =>
    fullHeightOnMobile ? "100vh" : "unset"};
  padding: ${(props) => !props.noChildrenPadding && props.theme.spacing(3)}px
    ${(props) => !props.noChildrenPadding && props.theme.spacing(2)}px;
`;

export const ModalContainer = styled.div`
  padding: 10px ${(props) => props.theme.spacing(2)}px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.shadow1};
  border-radius: 8px;
  position: fixed;
  margin: ${(props) => props.theme.spacing(4)}px 0;
  max-height: calc(100vh - (28px * 2));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  top: 0;
`;

export const ModalHeader = styled.header`
  align-items: center;
  display: flex;
  padding: ${(props) => props.theme.spacing(2)}px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    margin-top: 4px;
  }
`;

export const ModalTitle = styled.h3`
  ${(props) => props.theme.fontTypes.heading}
  color: ${(props) => props.theme.colors.gray2};
  font-weight: normal;
  flex: 1;
`;

export const CloseButton = styled(CloseIcon)`
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    fill: ${(props) => props.theme.colors.blue};
  }
`;

interface IModalWrapperProps {
  alignItems: string;
  isOpen: boolean;
}

export const ModalWrapper = styled.div<IModalWrapperProps>`
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  display: flex;
  height: ${(props) => (props.isOpen ? "100%" : 0)};
  justify-content: center;
  left: 0;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  overflow: auto;
  position: fixed;
  top: 0;
  transition: all ease 0.3s;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  width: 100vw;
  z-index: 13;
`;

export const ModalFooter = styled.footer`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;
