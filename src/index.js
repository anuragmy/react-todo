import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGateway } from 'redux-persist/lib/integration/react';
import { store } from './store';
import App from './App';


const reduxStore = store;
const persistor = persistStore(reduxStore);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
    {/* <PersistGateway persistor={persistor} loading={<div>Loading...</div>}>
      
    </PersistGateway> */}
  </Provider>
  , document.getElementById("root")
);