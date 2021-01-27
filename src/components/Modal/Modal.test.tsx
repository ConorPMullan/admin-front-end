import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '@utils/test';
import Modal from './index';
import { useToggle } from '@hooks';

let mockShowModal = false;
let mockSetShowModal: () => void = jest.fn();

jest.mock('@hooks/useToggle', () => {
  return jest.fn(() => {
    showModal: mockShowModal;
    setShowModal: mockSetShowModal;
  });
});

afterEach(cleanup);

describe('Testing Modal Component', () => {
  test('renders the modal container', () => {
    mockShowModal = true;
    const { getByRole } = renderWithRouter(
      <Modal
        showModal={mockShowModal}
        setShowModal={mockSetShowModal}
        content={<div>Testing Modal Component</div>}
        showCloseButton
      />
    );

    expect(getByRole('dialog')).toBeInTheDocument();
  });

  test('setShowModal is clickable', () => {
    mockShowModal = true;
    const { getByRole } = renderWithRouter(
      <div>
        <Modal
          showModal={mockShowModal}
          setShowModal={mockSetShowModal}
          content={<div>Testing Modal Component</div>}
          showCloseButton
        />
      </div>
    );

    fireEvent.click(getByRole('dialog'));

    expect(mockSetShowModal).toBeCalled();
  });
});