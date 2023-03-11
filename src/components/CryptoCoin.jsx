import React from 'react';
import PropTypes from 'prop-types';

const CryptoCoin = () => (
  <div>
    <p>price</p>
  </div>
);

CryptoCoin.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    coinName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,

  }).isRequired,
};
export default CryptoCoin;
