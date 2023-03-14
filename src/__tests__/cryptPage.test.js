import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import CryptoPage from '../pages/cryptoPage';
import store from '../redux/store';

describe('CryptoInfo component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render Crypto Prices in USD', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <CryptoPage />
      </Provider>,
    );
    await waitFor(() => expect(getByText('Crypto Prices in USD')).toBeInTheDocument());
  });
});
