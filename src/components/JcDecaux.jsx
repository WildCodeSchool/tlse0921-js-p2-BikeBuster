// import { useState, useEffect } from 'react';

// const Data = () => {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     fetch(
//       'https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=5f63c657462f5fd56c2dfa4650a927968c7b37c3',
//     )
//       .then((response) => response.json())
//       .then((data) => setResults(data));
//   }, []);

//   return (
//     <ul>
//       {results
//         .filter((e) => (e.number === 55))
//         .map((result) => (
//           <li>
//             {result.name}
//             {result.contract_name}
//             {result.number}
//             {result.position.lat}
//             {result.position.lng}
//             {result.address}
//             {result.banking}
//             {result.bonus}
//             {result.bike_stands}
//             {result.available_bike_stands}
//             {result.available_bikes}
// //             {result.status}
// //             {result.last_update}
// //           </li>
// //         ))}
// //     </ul>
// //   );
// };

// export default Data;
