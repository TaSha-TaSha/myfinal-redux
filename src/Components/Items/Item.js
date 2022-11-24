import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from '../../redux/cartSlice';
import Quantity from '../Cart/Quantity';

const Item = ({eachItem})  => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(<div>
        <div className="itemsEvenly" >
            <div className="itemsColumn">
                <h2 className="itemName">{eachItem.name}</h2>
                <img src={`./${eachItem.image}.jpg`} alt='cosmetics' className='photoItems' />
                <p className="itemText">{eachItem.description}</p>
                <p className="itemVolum">{eachItem.volume}</p>
                <p className="itemPrice">${eachItem.price}</p>
                <Quantity  quantity={quantity} setQuantity={setQuantity} />
                <button onClick={ () => {dispatch(addItemToCart( {eachItem, quantity } ))}} className="AddToCart">Add To Cart</button> 
            </div>
        </div>
    </div>)
};

export default Item;