import { useState } from "react";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice, getTotalQuantity } from '../../redux/cartSlice';
import CartItem from './CartItem';

export const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalQuantity = useSelector(getTotalQuantity)

    const [modalActive, setModalActive] = useState(false);
    const [thanks, setThanks] = useState(false);

    let shipping = totalPrice >= 110;

    return(<div className="checkOutAll">
        <div className="cartIcon">
            <img onClick={ () => setModalActive(true) } src={`./bag.jpg`} alt='cart' className="cartIconImage" />
            <p className="cartInsideQuantity">{totalQuantity}</p>
        </div>

        <div onClick={ () => setModalActive(false) }
            className={ modalActive ? 'modal activated' : 'modal' }
        >

        <div onClick={ (e) => e.stopPropagation() }
            className={ modalActive ? 'modalContent activated' : 'modalContent'}
        >

        <h2 className="yourCart">Your Cart</h2>
        <p className="cartItemsText">It has {totalQuantity} item(s):</p>

        {cartItems.map( (element, index) => (<CartItem itemInCart={element} key={index}/>)) }

        <div className="cartInfoContainer">
            <h3 className="showingTotal">Total price: </h3>
            <h3 className="showingTotal">$ {totalPrice}</h3> 
            <p className="showingShipping">Shipping: </p>
            <p className="showingShipping">{shipping ? '!!! WoW it is Free !!!' : '$10'}</p> 
        </div>

        <div className="cartPayment">
            <button onClick={ () => setThanks(!thanks) }>check out</button>
            <div className={ thanks ? 'thanks showThanks' : 'thanks' }>
                <h5>Thank you for choosing our company!</h5>
                <p>There should be a payment form here, but this is not a real company.</p>
            </div>
        </div>
        </div> 
        </div> 
        </div>);
;}

// export default Cart;


