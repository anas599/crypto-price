import React from 'react';
import { render } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import store from '../redux/store';
import CryptoInfo from '../pages/cryptoInfo';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('YourComponent', () => {
  it('renders a list of crypto items', () => {
    const mockedCryptoArr = [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        image: 'https://example.com/bitcoin.png',
        current_price: 50000,
      },
      {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        image: 'https://example.com/ethereum.png',
        current_price: 2000,
      },
    ];
    useSelector.mockReturnValue(mockedCryptoArr);

    const { getByText } = render(
      <Provider store={store}>
        <CryptoInfo />
      </Provider>,
    );

    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(getByText('$50000')).toBeInTheDocument();
    expect(getByText('Ethereum')).toBeInTheDocument();
    expect(getByText('$2000')).toBeInTheDocument();
  });
});
