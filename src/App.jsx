import React from 'react';
import HelloWorld from './HelloWorld';
import './styles.css';
import Card from './card.jsx';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;

// I still get the error
//-------------------------------------------








// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import HelloWorld from './HelloWorld'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>






//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
