import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { getCryptoPrices, coinInfo } from '../redux/crypto/cryptoSlice';
import CryptoInfo from './cryptoInfo';
import CryptoImage from '../assets/CRYPTOunsplash.webp';

const CryptoPage = () => {
  const dispatch = useDispatch();
  const cryptoArr = useSelector((state) => state.crypto.cryptoArr);
  const loading = useSelector((state) => state.crypto.loading);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (cryptoArr.length === 0) {
      dispatch(getCryptoPrices());
    }
  }, [dispatch, cryptoArr]);

  const coinInfoHandel = (id) => {
    dispatch(coinInfo(id));
    setSearch('');
    const searchInput = document.querySelector('.input');
    searchInput.style.display = 'none';
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredCryptoArr = cryptoArr.filter(
    (crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h2 className="crypto-h2">Crypto Prices in USD</h2>
      <section>
        <img src={CryptoImage} alt="" />
      </section>
      <div>
        <div className="search">
          <input
            className="input"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Crypto to search"
            value={search}
          />
        </div>

        {filteredCryptoArr.length > 1 ? (
          <div className="crypto-container">
            {filteredCryptoArr.map((crypto) => (
              <Link to={`${crypto.name}`} key={crypto.id} className="asd">
                <button
                  type="button"
                  onClick={() => coinInfoHandel(crypto.id)}
                  className="single-crypto"
                  id={crypto.id}
                >
                  <img src={crypto.image} alt="coinImage" />
                  <p key={crypto.id}>
                    {crypto.name}
                    <br />
                    Price: $
                    {crypto.current_price}
                  </p>
                </button>
              </Link>
            ))}
          </div>
        ) : (
          <div> </div>
        )}
      </div>
      <Routes>
        {filteredCryptoArr.map((crypto) => (
          <Route key={crypto.id} path={`/${crypto.name}`} element={<CryptoInfo />} />
        ))}
      </Routes>
    </>
  );
};

export default CryptoPage;
