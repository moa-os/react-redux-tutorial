import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './state/reducer';
import './App.css';
import NumberPicker from './components/NumberPicker/NumberPicker';
import NumberShower from './components/NumberShower/NumberShower';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <NumberShower />
        <NumberPicker />
      </header>
    </div>
  </Provider>
);

export default App;
