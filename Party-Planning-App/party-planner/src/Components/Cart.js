import React, { Component } from 'react';

export default class Cart extends Component{

    render(){  
        return (
        <div className="totalBottomBox">
                <div className="cartBorder">
                <h2 className="cartName" >Cart:</h2>
                <ul>
                    {this.props.cart.map((item, index) => {
                        return(
                        <li className="cartItems" key={index}>{item.item} ${item.price} {/* <label>QTY:</label><input type="number" defaultValue={this.props.guests}/>*/}</li> 
                        )
                    })}
                    </ul>
            </div>
            <div className="everythingButCart">
                <div className="totalBorder"> 
                    <h2 className="totalName" >Total:</h2>
                    <div className="totalTotal" >
                        $ {this.props.finalPrices.reduce((accumulator, currentValue) => accumulator + currentValue)}
                    </div>
                </div>
                    
                <div className="stayInBudge">
                    {this.props.budgetStatus}
                </div>
            </div>    
        </div>
        );
    }
}
