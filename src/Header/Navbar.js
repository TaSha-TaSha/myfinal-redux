import { Cart } from '../Components/Cart/Cart';

const Navbar = () => {
    return(<div className="navbarContainer">
        <ul className="navbarList">
            <li><a href="/" className="listItem">Home</a></li>
            <li><a href="#products" className="listItem">Products</a></li>
            <li><a href="#contacts" className="listItem">Contacts</a></li>
            <li><Cart /></li>
        </ul>
    </div>)
};

export default Navbar;


