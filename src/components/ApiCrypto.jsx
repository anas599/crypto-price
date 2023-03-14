// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const ApiCrypto = () => {
//   const [cryptoPrices, setCryptoPrices] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
//         );
//         setCryptoPrices(response.data);
//       } catch (ex) {
//         console.log(ex);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {cryptoPrices ? (
//         <div className="crypto">
//           {cryptoPrices.map((crypto) => (
//             <div key={crypto.id}>
//               <p key={crypto.id}>
//                 {crypto.name}
//                 : $
//                 {crypto.current_price}
//               </p>
//               <p>
//                 {' '}
//                 Today High
//                 {crypto.high_24h}
//               </p>
//               <img src={crypto.image} alt="coinImage" />

//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>Loading data...</div>
//       )}
//     </div>
//   );
// };

// export default ApiCrypto;
