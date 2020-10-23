import React, { Component } from 'react';

export default class ItemList extends Component{

    render(){ 
      return (
          
          <div className="itemList">
            <ul>
            {this.props.partyItems.map((item, index) => {
                return(
                    <li className="actualItems" key={index}>{item.item} ${item.price} 
                    <button className="addItem" onClick={ () => {this.props.addItem(item, index)}}>Add Item</button></li>
                )
            })}
            </ul>
          </div>
        );
    }
}
