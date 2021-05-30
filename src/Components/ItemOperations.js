import { useState, useEffect } from 'react';
import ItemsList from './ItemsList';
const ItemOperation = (props) => {
    const [search, setSearch] = useState('');
    const [isStock, setIsStock] = useState(false);
    const [itemCategory, setCategory] = useState({
        list: []
    });
    const inputEvent = (event) => {
        setSearch(() => {
            return event.target.value;
        })
    }
    useEffect(() => {
        function getData(data) {
            let categoryArray = [];
            data.forEach((element) => {
                if (categoryArray.includes(element.category)) {
                    // will execute for distinct value
                } else {
                    categoryArray.push(element.category);
                }
            })
            setCategory(() => {
                return {
                    list: categoryArray
                };
            })
        }
        getData(props.data);
    }, []);
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setIsStock(() => {
            return value;
        });
    }

    if (Object.keys(itemCategory.list).length === 0) {
        return (
            <h1>OOPS, something went wrong</h1>
        )
    }

    return (
        <div>
            <input type="text" name="search" placeholder="search..." onChange={inputEvent} value={search} />
            <br />
            <label>
                <input
                    name="isStock"
                    type="checkbox"
                    checked={isStock}
                    onChange={handleInputChange}
                    value={isStock} />
            Only show products in stock
        </label><br/>
            <span>Name </span><span> Price</span>
            {itemCategory.list.map((cat) => {
                return <ItemsList data={cat} isStock={isStock} items={props.data} search={search} />
            })}
        </div>
    );
}

export default ItemOperation;