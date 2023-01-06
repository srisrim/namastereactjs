import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faUser } from '@fortawesome/fontawesome-free-solid'


const MainHeader = () => (
    <div className="header">
        <input type="text" placeholder="search" className="input-search" />
    </div>
)
const Logo = () => (
    <div className="logo">
        <a href="#"><FontAwesomeIcon icon={faRocket} /></a>
    </div>
)

const User = () => (
    <div className="user">
        <a href="#"><FontAwesomeIcon icon={faUser} /></a>
    </div>
)


const HeaderComponent = () =>  (
    
    <div className="header-container">
        <Logo size={ 320 }/>
        <MainHeader/>
        <User/>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeaderComponent/>);