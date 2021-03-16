import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "styled-components";
import Icon, { dict } from "../IconExporter";
import Text from "../Text";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
  TitleWrapper,
  ChildrenWrapper,
  ModalFooter,
} from "./styles";
interface IProps {
  headerIcon?: keyof typeof dict;
  modalTitle?: string;
  modalSubtitle?: string;
  handleClose: () => void;
  isOpen: boolean;
  alignItems?: string;
  footer?: React.ReactNode;
  isHeaderComponent?: boolean;
  header?: React.ReactNode;
  noChildrenPadding?: boolean;
  fullHeightOnMobile?: boolean;
}
const Modal: React.FC<IProps> = ({
  handleClose,
  isOpen,
  children,
  footer,
  header,
  alignItems = "",
  modalTitle = "",
  modalSubtitle = "",
  headerIcon = null,
  isHeaderComponent = true,
  noChildrenPadding = false,
  fullHeightOnMobile = false,
  ...rest
}) => {
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    const body = document.querySelector<HTMLInputElement>("body");
    const html = document.querySelector<HTMLInputElement>("html");
    if (isOpen) {
      body!.style.overflow = "hidden";
      html!.style.overflowY = "hidden";
    }
    function handleOverflow() {
      body!.style.overflow = "unset";
      html!.style.overflowY = "unset";
    }
    return () => handleOverflow();
  }, [isOpen]);
  useEffect(() => {
    const handler = function handleEscClose(event: KeyboardEvent) {
      if (isOpen && event.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keyup", handler);
    return () => window.removeEventListener("keyup", handler);
  }, [handleClose, isOpen]);
  const renderHeader = () => {
    if (header) {
      return header;
    }
    return (
      <>
        {headerIcon && (
          <Icon width="28" fill={themeContext.colors.blue} name={headerIcon} />
        )}
        {!!modalSubtitle ? (
          <TitleWrapper>
            <ModalTitle>{modalTitle}</ModalTitle>
            <Text bold color="gray2">
              {modalSubtitle}
            </Text>
          </TitleWrapper>
        ) : (
          <ModalTitle>{modalTitle}</ModalTitle>
        )}
        <CloseButton
          data-gtm-subname={`modal ${modalTitle}`}
          data-gtm-name="botao fechar"
          data-gtm-type="click"
          data-gtm-clicktype="button"
          onClick={handleClose}
          name="close"
          color="gray2"
          width={28}
          height={28}
        />
      </>
    );
  };
  return ReactDOM.createPortal(
    <ModalWrapper isOpen={isOpen} alignItems={alignItems} {...rest}>
      <ModalOverlay isOpen={isOpen} onClick={handleClose} />
      <ModalContainer>
        {isHeaderComponent ? (
          <>
            <ModalHeader>{renderHeader()}</ModalHeader>
          </>
        ) : null}
        <ChildrenWrapper
          noChildrenPadding={noChildrenPadding}
          fullHeightOnMobile={fullHeightOnMobile}
        >
          {children}
        </ChildrenWrapper>
        {footer && (
          <>
            <ModalFooter>{footer}</ModalFooter>
          </>
        )}
      </ModalContainer>
    </ModalWrapper>,
    document.querySelector("#root") as HTMLInputElement
  );
};
export default Modal;
