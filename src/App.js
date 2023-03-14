import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
// import ApiCrypto from './components/ApiCrypto';
import CryptoPage from './pages/cryptoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <CryptoPage />
    </BrowserRouter>
  );
}

export default App;
