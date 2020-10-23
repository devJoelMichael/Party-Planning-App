import React, { Component } from 'react';

export default class Header extends Component{

    render(){  
      return (
        <div className="inputz">
          <div className="header">
            <h1 className="headerTitle" >Party Hearty</h1>
            </div>
          <div>
            <label className="guests" htmlFor="numberOfGuests">Number of Guests:</label>
            <input className="one" type="number" min="0" id="numOfGuests" onChange={this.props.handleGuests}/>
            <br/>
            <label className="budge" htmlFor="budget">Budget: $</label>
            <input className="two" type="number" min="0" id="budget" onChange={this.props.handleBudget}/>
          </div>
        </div>
        );
    }
}
