const HeaderComponent = () => ( // implicitly returns 
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export const Title = () => (
    <div className="title">
        <a href="#"><img alt="logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cbbxaegl2u2fvrss6pec" /></a>
    </div>
)

export default HeaderComponent;