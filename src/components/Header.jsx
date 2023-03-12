import React from 'react';
import { useDispatch } from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { cryptoInfoReset } from '../redux/crypto/cryptoSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleResetCryptoInfo = () => {
    dispatch(cryptoInfoReset());
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button type="button" onClick={handleResetCryptoInfo}>
              -
              <ChevronLeftIcon />
            </button>

          </li>
          <li><p>Prices</p></li>
          <li><MicIcon /></li>
          <li><SettingsIcon /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
