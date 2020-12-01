import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.fadedBlack}};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white}};

  box-size: border-box;
  margin: 0;
  padding: 0;

  min-width: 50vw;
  width: max-content;
  max-width: 90vw;

  min-height: 50vh;
  height: max-content;
  max-height: 90vh;

  box-shadow: ${({ theme }) => `0 8px 16px 0 ${theme.colors.fadedPaleBlue}`};

  z-index: 10;
  border-rardius: 10px;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
`;

export const CloseButton = styled.button`
  align-self: flex-end;

  height: 45px;
  width: 45px;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;

  margin-right: 6px;

  :hover {
    cursor: pointer;
  }

  svg {
    width: 35px;
    height: 35px;
    fill: ${({ theme }) => theme.colors.orange};
  }
`;

export const Content = styled.div`
  overflow: auto;
`;
