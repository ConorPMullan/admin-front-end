import React from 'react';
import { ReactComponent as Close } from '@assets/close.svg';
import { ModalContainer, Background, Content, CloseButton } from './styled';

interface Props {
  showModal: boolean;
  setShowModal: () => void;
  content: React.FC | JSX.Element;
  showCloseButton?: boolean;
}

const Modal: React.FC<Props> = ({
  showModal,
  setShowModal,
  content,
  showCloseButton,
}) => {
  const stopPropagation = (e: React.MouseEvent<HTMLInputElement>) =>
    e.stopPropagation();

  const modalComponent = showModal ? (
    <Background onClick={setShowModal} role="dialog" aria-modal="true">
      <ModalContainer onClick={stopPropagation}>
        {showCloseButton && (
          <CloseButton onClick={setShowModal}>
            <Close />
          </CloseButton>
        )}
        <Content>{content}</Content>
      </ModalContainer>
    </Background>
  ) : null;

  return modalComponent;
};

export default Modal;
