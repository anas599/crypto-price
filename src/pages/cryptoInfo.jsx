import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/cryptoInfo.css';

const CryptoInfo = () => {
  const cryptoArr = useSelector((state) => state.crypto.cryptoArr);

  return (
    <div>
      {cryptoArr ? (
        <div className="crypto-container-single">
          {cryptoArr.map((crypto) => (
            <ul type="button" key={crypto.id} className="single-crypto-info" id={crypto.id}>
              <li><img src={crypto.image} alt="coinImage" /></li>
              <li>
                <h2>
                  {crypto.name}
                </h2>
              </li>
              <li className="crypto-info-text">
                <p>
                  Trading Symbol:
                </p>
                <p>
                  (
                  {crypto.symbol}
                  )
                </p>
              </li>

              <li className="crypto-info-text">
                {' '}
                <p>Price:</p>
                <p>
                  $
                  {crypto.current_price}
                </p>
              </li>
              <li className="crypto-info-text">
                <p>High 24H:</p>
                <p>
                  $
                  {crypto.high_24h}
                </p>
              </li>
              <li className="crypto-info-text">
                <p>Low 24H:</p>
                <p>
                  $
                  {crypto.low_24h}
                </p>
              </li>
              <li className="crypto-info-text">
                <p>Market Cap:</p>
                <p>
                  $
                  {crypto.market_cap}
                </p>
              </li>
              <li className="crypto-info-text">
                <p>Price Change in 24H:</p>
                <p>
                  $
                  {crypto.price_change_24h}
                </p>
              </li>
              <li className="crypto-info-text">
                <p>Circulating Supply:</p>
                <p>
                  {crypto.circulating_supply}
                </p>
              </li>
              <li className="crypto-info-text">
                <p>Total Supply:</p>
                <p>
                  {crypto.total_supply}
                </p>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
};
export default CryptoInfo;
