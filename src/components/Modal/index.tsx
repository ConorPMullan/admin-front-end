import React from 'react';
import { ModalContainer, Background, Content, CloseButton } from './styled';
import { ReactComponent as Close } from '@assets/close.svg';

interface Props {
  showModal: boolean;
  setShowModal: any;
  content: any;
  showCloseButton?: boolean;
}

const Modal: React.FC<Props> = ({
  showModal,
  setShowModal,
  content,
  showCloseButton,
}) => {
  const _stopPropagation = (e: any) => e.stopPropagation();

  return (
    <>
      {showModal ? (
        <Background onClick={setShowModal} role="modal">
          <ModalContainer onClick={_stopPropagation}>
            {showCloseButton && (
              <CloseButton onClick={setShowModal}>
                <Close />
              </CloseButton>
            )}
            <Content>{content}</Content>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
