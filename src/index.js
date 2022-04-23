// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/configureStore';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>
//   </React.StrictMode>,
// );

import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './redux/configureStore';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
