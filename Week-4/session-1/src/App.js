import React from 'react';
import ReactDOM from 'react-dom/client';

// default exports can be imported this way without using {}, but named exports should use {}
import HeaderComponent, { Title } from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";

const App = () => {
  return (
      <React.Fragment>
          <HeaderComponent />
          <BodyComponent />
          <FooterComponent />
      </React.Fragment>
  )
}

export default App;
