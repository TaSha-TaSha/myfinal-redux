import { useDispatch } from 'react-redux';
import dataCategories from '../../data/dataCategories';
import { removeItemFromTheCart } from '../../redux/cartSlice';

const CartItem = ({itemInCart}) => {
    const toShow = dataCategories.find( element => element.id ===itemInCart.productId);
    const dispatch = useDispatch();

    return(<div className="cartItems">
        <h3>{toShow.name}</h3>
        <p>{itemInCart.productQuantity} item(s)</p>
        <h4>Price: ${toShow.price * itemInCart.productQuantity}</h4>
        <img onClick={ () => dispatch(removeItemFromTheCart( {itemInCartId: itemInCart.id} ))} src={`./trash.jpg`} alt='icon' className='trash' />
    </div>)
}

export default CartItem;