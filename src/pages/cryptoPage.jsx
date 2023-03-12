import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCryptoPrices, coinInfo } from '../redux/crypto/cryptoSlice';
import CryptoInfo from './cryptoInfo';
import CryptoImage from '../assets/CRYPTOunsplash.webp';

const CryptoPage = () => {
  const dispatch = useDispatch();
  const cryptoArr = useSelector((state) => state.crypto.cryptoArr);
  const loading = useSelector((state) => state.crypto.loading);

  useEffect(() => {
    if (cryptoArr.length === 0) {
      dispatch(getCryptoPrices());
    }
  }, [dispatch, cryptoArr]);
  const coinInfoHandel = (id) => {
    dispatch(coinInfo(id));
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (cryptoArr.length > 1) {
    return (
      <>
        <section>
          <img src={CryptoImage} alt="" />
        </section>
        <div>
          {cryptoArr ? (
            <div className="crypto-container">
              {cryptoArr.map((crypto) => (
                <button type="button" onClick={() => coinInfoHandel(crypto.id)} key={crypto.id} className="single-crypto" id={crypto.id}>
                  <img src={crypto.image} alt="coinImage" />
                  <p key={crypto.id}>
                    {crypto.name}
                    <br />
                    Price: $
                    {crypto.current_price}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div>Loading data...</div>
          )}
        </div>

      </>
    );
  } return (<CryptoInfo />);
};

export default CryptoPage;
