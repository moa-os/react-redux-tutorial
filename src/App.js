import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './state/reducer';
import './App.css';
import NumberPicker from './components/NumberPicker/NumberPicker';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <NumberPicker />
      </header>
    </div>
  </Provider>
);

export default App;
