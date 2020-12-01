import React, { ReactElement } from 'react';
import { useToggle } from '@hooks';
import { CallToActionButton, Modal } from '@components';

const Home: React.FC = (): ReactElement => {
  const [showModal, setShowModal] = useToggle(false);

  // TODO: remove button and modal, being used for testing in QA process
  const tempContent = (
    <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  );

  return (
    <div>
      <div>Hello, I am the home page!</div>
      <CallToActionButton
        dataTestId={'call-to-action-button'}
        label={'TempModal'}
        height="100px"
        onClick={setShowModal}
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={tempContent}
        showCloseButton
      />
    </div>
  );
};

export default Home;
