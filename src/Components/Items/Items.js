import { useSelector } from 'react-redux';
import { dataCategories } from '../../data/dataCategories';
import { getSelectedCategory } from '../../redux/categorySlice';
import Item from './Item';

const Items = () => {
    const selected = useSelector(getSelectedCategory);

    return(<div className="itemsContainer">
        {dataCategories
        .filter( element => {
            if(selected === 'ALL') return true;
            return selected === element.category
        })
        .map ( (element, index) => (<Item eachItem={element} key={index}/>))}
    </div>)
}

export default Items;