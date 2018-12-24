import React, { Component, useEffect } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store} from "./state";
import './App.css';
import Page1 from "./components/Page1/Page1.js"
import Page2 from "./components/Page2/Page2.js"
import Page3 from "./components/Page3/Page3.js"

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App">
            <Page1></Page1>
            <Page2></Page2>
            <Page3></Page3>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
