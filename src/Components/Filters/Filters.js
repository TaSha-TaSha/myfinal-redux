import Filter from './Filter';

const Filters = () => {
    return(<div id='products' className='filterItems'>
        {['SOAP', 'LOTION', 'CREAM', 'OIL', 'ALL'].map( (element, index) => (<Filter filterCategory={element} key={index} />))}
    </div>)
}

export default Filters;