import React from 'react';
import { cleanup, waitFor } from '@testing-library/react';
import { TestUtils } from '@test-utils';
import { PageTitle } from '.';

afterEach(cleanup);

describe('Page Utility Tests', () => {
  test('Sets the correct title based on the passed in prop', async () => {
    const title = 'My Document Title';
    TestUtils.render(
      <PageTitle title={title}>
        <div> Test </div>
      </PageTitle>
    );
    await waitFor(() =>
      expect(document.title).toEqual(`Pet Food Experts - ${title}`)
    );
  });
});
