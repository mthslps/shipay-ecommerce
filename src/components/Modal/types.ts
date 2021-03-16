export interface ModalProps {
  handleClose: () => void;
  header?: React.ReactNode;
  isOpen: boolean;
}

export interface IsOpen {
  isOpen: boolean;
}
