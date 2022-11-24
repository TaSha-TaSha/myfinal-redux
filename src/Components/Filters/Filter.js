import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filteredCategory } from "../../redux/categorySlice";

const Filter = ({filterCategory}) => {
    const selected = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return(<div>
        <h2 onClick={ () => {dispatch(filteredCategory( filterCategory ))} } className={selected === filterCategory ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{filterCategory}</h2>
    </div>)
}

export default Filter;