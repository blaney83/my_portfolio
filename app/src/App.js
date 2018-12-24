import React, { Component, useEffect } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store} from "./state";
import './App.css';
import Background1 from "./components/Backgrounds/Background1.js"
import Background2 from "./components/Backgrounds/Background2.js"
import Background3 from "./components/Backgrounds/Background3.js"
import Background4 from "./components/Backgrounds/Background4.js"
import Landing from "./components/Landing/Landing.js"
import LandingCover from "./components/Landing/LandingCover.js"
import Page1 from "./components/Page1/Page1.js"
import Page2 from "./components/Page2/Page2.js"
import Page3 from "./components/Page3/Page3.js"
import Page4 from "./components/Page4/Page4.js"

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App">
          <Background1/>
          <Background2/>
          <Background3/>
          {/* <Background4/> */}
          <Landing></Landing>
          <LandingCover/>
            <Page1></Page1>
            <Page2></Page2>
            <Page3></Page3>
            <Page4></Page4>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
