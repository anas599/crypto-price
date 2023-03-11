import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCryptoPrices } from '../redux/crypto/cryptoSlice';

const CryptoPage = () => {
  const dispatch = useDispatch();
  const cryptoArr = useSelector((state) => state.crypto.cryptoArr);
  const loading = useSelector((state) => state.crypto.loading);

  useEffect(() => {
    if (cryptoArr.length === 0) {
      dispatch(getCryptoPrices());
    }
  }, [dispatch, cryptoArr]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {cryptoArr ? (
        <div className="crypto-container">
          {cryptoArr.map((crypto) => (
            <div key={crypto.id} className="single-crypto" id={crypto.id}>
              <img src={crypto.image} alt="coinImage" />
              <p key={crypto.id}>
                {crypto.name}
                : $
                {crypto.current_price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
};

export default CryptoPage;
