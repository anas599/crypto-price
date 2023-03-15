import React from 'react';
import { useDispatch } from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {
  Routes, Route, NavLink, useLocation,
} from 'react-router-dom';
import { cryptoInfoReset } from '../redux/crypto/cryptoSlice';
import CryptoPage from '../pages/cryptoPage';

const Header = () => {
  const location = useLocation;
  const currentLocation = location.pathname;
  const dispatch = useDispatch();

  const handleResetCryptoInfo = () => {
    dispatch(cryptoInfoReset());
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" style={({ isActive }) => ({ textDecoration: isActive || currentLocation === '/' ? 'underline' : 'none' })}>
                <button type="button" onClick={handleResetCryptoInfo} className="singleCRbtn">
                  <ChevronLeftIcon />
                </button>
              </NavLink>
            </li>
            <li><p>Cryptocurrency Prices</p></li>
            <div className="right-nav">
              <li><MicIcon /></li>
              <li><SettingsIcon /></li>
            </div>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="*" element={<CryptoPage />} />
      </Routes>

    </>
  );
};

export default Header;
