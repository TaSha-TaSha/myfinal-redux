const Quantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return(<div className='quantityBtn'>
        <button onClick={addQuantity} className="calc">+</button>
        <span>{quantity}</span>
        <button onClick={removeQuantity} className="calc">-</button>
    </div>)
}
export default Quantity;