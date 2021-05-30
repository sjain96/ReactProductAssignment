
import React from 'react';

const ItemsList = (props) => {
let items;
  if(props.data){
    items = (props.items).filter((item) => {
            if(props.isStock){
                return (item.category == props.data && item.stocked && (item.name.toLowerCase()).includes(props.search.toLowerCase()));
            } else {
                return (item.category == props.data && (item.name.toLowerCase()).includes(props.search.toLowerCase()));
            }
    })
  }
  return (
      <div>
          <h4> { props.data }</h4>
          {items.map((item) => {
                return  (
                    <>
                    <span className={item.stocked ? "" : "stocked"}>{item.name} </span><span> {item.price}</span><br/>
                    </>
                )
            })}
      </div>
  );
}

export default ItemsList;