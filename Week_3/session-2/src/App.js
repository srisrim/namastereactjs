import React from 'react';
import ReactDOM from 'react-dom/client';

// default exports can be imported this way without using {}, but named exports should use {}
import HeaderComponent, { Title } from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";

const AppLayout = () => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);