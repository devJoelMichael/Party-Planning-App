import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Cart from './Components/Cart'
import ItemList from './Components/ItemList'

export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      partyItems:
        [{ item: "Napkins:", price: 3.00 },
          { item: "Plates:", price: 10.00 },
          { item: "Cups:", price: 5.00 },
          { item: "Cutlery:", price: 7.00 },
          { item: "Table Cloths:", price: 13.00 },
          { item: "Balloons:", price: 10.00 },
          { item: "Banners:", price: 16.00 },
          { item: "Yard Signs:", price: 22.00 }, 
          { item: "Candles:", price: 4.00 },
          { item: "Beer:", price: 22.00 },
          { item: "Hard Liquor:", price: 30.00 }, 
          { item: "Hard Seltzer:", price: 12.00 },
          { item: "Board Games:", price: 20.00 }, 
          { item: "Video Games:", price: 25.00 },
          { item: "Card Games:", price: 15.00 },
          { item: "Yard Games:", price: 22.00 },
          { item: "Chips:", price: 6.00 },
          { item: "Dip:", price: 15.00 },
          { item: "Veggies:", price: 15.00 },
          { item: "Meat Plate:", price: 23.00 },
          { item: "Pizza:", price: 16.00 }],
      cart: [],
      finalPrices: [0],
      guests: "",
      budget: 0,
      budgetStatus: <p className="underBudge">UNDERBUDGET</p>
    }
  }
   // Add Item method. Updates cart with items added and adds the item price to the finalPrices arr.
  addItem = (currentItem) => {
    const {cart, finalPrices, budget} = this.state
    this.setState({ cart: [...cart, currentItem]})
    this.setState({ finalPrices: [...finalPrices, currentItem.price]})
    if(finalPrices.reduce((accumulator, currentValue) => accumulator + currentValue) > budget){
      this.setState({ budgetStatus: <p className="overBudge">OVERBUDGET</p>})
    }
  }

  // Sets the state of guests to be the user entered input. 
  handleGuests = (e) => {
    const {guests} = this.state
    this.setState({ guests: e.target.value})
    e.preventDefault()
  }

  handleBudget = (e) => {
    const {budget} = this.state
    this.setState({ budget: e.target.value})
    e.preventDefault()
    console.log(budget);
  }

  
  render(){  
    return (
      <>
        <Header 
          handleGuests={this.handleGuests}
          handleBudget={this.handleBudget}
          numOfGuests={this.state.guests}
        />

        <div className="pictureSpace">
          <img src="./images/tomuch.png" className="manTwo"/>
          <img src="./images/tomuch.png" className="manOne"/>
        </div>

        <ItemList 
          partyItems={this.state.partyItems}
          addItem={this.addItem}
        />

        <div className="pictureSpace">
          <img src="./images/poppers.png" className="poppersTwo"/>
          <img src="./images/poppers.png" className="poppersOne"/>
        </div>

        <Cart 
          cart={this.state.cart}
          finalPrices={this.state.finalPrices}
          guests={this.state.guests}
          budget={this.state.budget}
          budgetStatus={this.state.budgetStatus}
        />

        <div>
          <img src="./images/bottles.png" className="bottlesTwo"/>
          <img src="./images/bottles.png" className="bottlesOne"/>
        </div>

        <div className="pictureSpace">
          <img src="./images/birthday.png" className="birthday" />
        </div>
      <div>
        <h2 className="closing">WE DON'T PARTY TILL YOU DO!</h2>
      </div>
      </>
    );
  }
}
