import React from 'react';
import { cleanup, waitFor } from '@testing-library/react';
import { render } from '@utils/test';
import { PageTitle } from './index';

afterEach(cleanup);

describe('Testing Page Title Utility Component', () => {
  test('sets the correct title based on the passed in prop', async () => {
    const title = 'My Document Title';
    render(
      <PageTitle title={title}>
        <div> Test </div>
      </PageTitle>
    );
    await waitFor(() =>
      expect(document.title).toEqual(`Pet Food Experts - ${title}`)
    );
  });
});
